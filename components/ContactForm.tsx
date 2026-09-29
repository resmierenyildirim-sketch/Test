'use client';

import { useId, useState, type FormEvent } from 'react';
import { content } from '@/lib/content';

type Field = 'email' | 'phone' | 'message';
type Errors = Partial<Record<Field, string>>;
type Status = 'idle' | 'sending' | 'sent' | 'mailto' | 'error';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Salient/Fluent Forms görünümünde iletişim formu. Adres varsa (NEXT_PUBLIC_CONTACT_ENDPOINT) oraya gönderir,
// yoksa e-posta uygulamasını hazır mesajla açar.
export default function ContactForm() {
  const c = content.contact;
  const uid = useId();
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>('idle');
  const id = (name: string) => `${uid}-${name}`;

  const clear = (name: string) => setErrors((e) => (name in e ? { ...e, [name]: undefined } : e));

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const v = (k: string) => String(fd.get(k) ?? '').trim();
    const next: Errors = {};
    if (!v('email')) next.email = c.required;
    else if (!EMAIL_RE.test(v('email'))) next.email = c.invalidEmail;
    if (!v('phone')) next.phone = c.required;
    if (!v('message')) next.message = c.required;
    setErrors(next);
    const first = (['email', 'phone', 'message'] as Field[]).find((k) => next[k]);
    if (first) {
      form.querySelector<HTMLElement>(`[name="${first}"]`)?.focus();
      return;
    }

    const payload = {
      interests: fd.getAll('interest').map(String),
      firstName: v('firstName'),
      lastName: v('lastName'),
      email: v('email'),
      phone: v('phone'),
      message: v('message'),
    };

    if (c.endpoint) {
      setStatus('sending');
      try {
        const r = await fetch(c.endpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify(payload),
        });
        if (!r.ok) throw new Error(String(r.status));
        form.reset();
        setStatus('sent');
      } catch {
        setStatus('error');
      }
      return;
    }

    const body = [
      `Name: ${payload.firstName} ${payload.lastName}`.trim(),
      `Email: ${payload.email}`,
      `Phone: ${payload.phone}`,
      payload.interests.length ? `Interested in: ${payload.interests.join(', ')}` : '',
      '',
      payload.message,
    ].filter((l, i) => l || i > 3).join('\n');
    window.location.href = `mailto:${c.email}?subject=${encodeURIComponent('Website enquiry')}&body=${encodeURIComponent(body)}`;
    setStatus('mailto');
  };

  if (status === 'sent') return <p className="ct-ok" role="status">{c.success}</p>;
  if (status === 'mailto') {
    return (
      <p className="ct-ok" role="status">
        {c.successMailto} <a className="ulink" style={{ display: 'inline-block' }} href={`mailto:${c.email}`}>{c.email}</a>.
      </p>
    );
  }

  const text = (name: Field | 'firstName' | 'lastName', type: string, f: { label: string; placeholder: string }, required = false) => {
    const err = errors[name as Field];
    return (
      <div className="ct-field" data-error={err ? '' : undefined}>
        <label htmlFor={id(name)} data-req={required ? '' : undefined}>{f.label}</label>
        <input
          id={id(name)}
          name={name}
          type={type}
          placeholder={f.placeholder}
          autoComplete={name === 'email' ? 'email' : name === 'phone' ? 'tel' : name === 'firstName' ? 'given-name' : 'family-name'}
          aria-required={required || undefined}
          aria-invalid={err ? true : undefined}
          aria-describedby={err ? `${id(name)}-err` : undefined}
          onInput={() => clear(name)}
        />
        {err && <p className="ct-err" id={`${id(name)}-err`}>{err}</p>}
      </div>
    );
  };

  const msgErr = errors.message;
  return (
    <form className="ct-form" noValidate onSubmit={onSubmit}>
      <fieldset className="ct-checks">
        <legend className="sr-only-x">{c.interestsLabel}</legend>
        {c.interests.map((label) => (
          <label key={label} className="ct-cb">
            <input type="checkbox" name="interest" value={label} />
            <span>{label}</span>
          </label>
        ))}
      </fieldset>

      <div className="ct-names">
        {text('firstName', 'text', c.fields.firstName)}
        {text('lastName', 'text', c.fields.lastName)}
      </div>
      {text('email', 'email', c.fields.email, true)}
      {text('phone', 'tel', c.fields.phone, true)}

      <div className="ct-field" data-error={msgErr ? '' : undefined}>
        <label htmlFor={id('message')} data-req="">{c.fields.message.label}</label>
        <textarea
          id={id('message')}
          name="message"
          rows={4}
          placeholder={c.fields.message.placeholder}
          aria-required
          aria-invalid={msgErr ? true : undefined}
          aria-describedby={msgErr ? `${id('message')}-err` : undefined}
          onInput={() => clear('message')}
        />
        {msgErr && <p className="ct-err" id={`${id('message')}-err`}>{msgErr}</p>}
      </div>

      <button type="submit" className="ct-submit" disabled={status === 'sending'}>
        {status === 'sending' ? c.sending : c.submit}
      </button>
      {status === 'error' && <p className="ct-err" role="alert" style={{ marginTop: 12 }}>{c.failure}</p>}

      <p className="ct-hint">
        {c.altPrefix}{' '}
        <a className="ulink" style={{ display: 'inline-block' }} href={`mailto:${c.email}`}>{c.altLink}</a>
      </p>
    </form>
  );
}
