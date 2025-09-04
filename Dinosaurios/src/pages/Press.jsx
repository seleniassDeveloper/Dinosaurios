
import React, { useEffect, useId, useRef, useState } from "react";
import "../css/DiscoveriesLanding.css";

export default function DiscoveriesLanding() {
  const nameId = useId();
  const emailId = useId();
  const msgId = useId();
  const sentRef = useRef(null);

  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const onChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  function validate() {
    const e = {};
    if (!form.name.trim()) e.name = "Required";
    if (!form.email.trim()) e.email = "Required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Invalid email";
    if (!form.message.trim()) e.message = "Required";
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  async function onSubmit(e) {
    e.preventDefault();
    if (!validate()) return;
    try {
      setLoading(true);
      // TODO: integra backend (Formspree / serverless / Firestore)
      await new Promise((r) => setTimeout(r, 600));
      setSent(true);
      setForm({ name: "", email: "", message: "" });
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => { if (sent && sentRef.current) sentRef.current.focus(); }, [sent]);

  return (
    <main className="discoveries-landing dino-landing" role="main">
      {/* HERO (solo H1 + CTA) */}
      <section className="dl-hero container" aria-labelledby="dl-hero-title">
        <h1 id="dl-hero-title" className="dl-title">Discoveries & Collaboration</h1>
        <div className="dl-cta-row">
          <a href="#contact" className="btn-amber">Get involved</a>
        </div>
      </section>

      {/* CONTACT FORM (solo formulario) */}
      <section id="contact" className="dl-contact dino-card container" aria-labelledby="contact-title">
        <h2 id="contact-title" className="dl-h2">Contact us</h2>
        <form className="contact-form" onSubmit={onSubmit} noValidate aria-live="polite">
          {sent && (
            <div ref={sentRef} tabIndex={-1} className="sent" role="status">
              Thanks! We’ll get back to you shortly.
            </div>
          )}

          <div className="form-row">
            <label htmlFor={nameId}>Full name</label>
            <input
              id={nameId}
              name="name"
              value={form.name}
              onChange={onChange}
              className={errors.name ? "error" : ""}
              placeholder="Jane Doe"
              autoComplete="name"
              aria-invalid={Boolean(errors.name)}
            />
            {errors.name && <span className="err">{errors.name}</span>}
          </div>

          <div className="form-row">
            <label htmlFor={emailId}>Email</label>
            <input
              id={emailId}
              name="email"
              type="email"
              value={form.email}
              onChange={onChange}
              className={errors.email ? "error" : ""}
              placeholder="jane@example.org"
              autoComplete="email"
              aria-invalid={Boolean(errors.email)}
            />
            {errors.email && <span className="err">{errors.email}</span>}
          </div>

          <div className="form-row">
            <label htmlFor={msgId}>Message</label>
            <textarea
              id={msgId}
              name="message"
              rows={5}
              value={form.message}
              onChange={onChange}
              className={errors.message ? "error" : ""}
              placeholder="How can we collaborate?"
              aria-invalid={Boolean(errors.message)}
            />
            {errors.message && <span className="err">{errors.message}</span>}
          </div>

          <div className="actions">
            <button type="submit" className="btn-amber" disabled={loading}>
              {loading ? "Sending…" : "Send message"}
            </button>
            <a className="btn-ghost" href="mailto:contact@expedition.org?subject=Discoveries%20Collab">Email us</a>
          </div>
        </form>
      </section>
    </main>
  );
}
