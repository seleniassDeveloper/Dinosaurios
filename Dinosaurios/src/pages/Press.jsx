// src/pages/DiscoveriesLanding.jsx
import React, { useEffect, useId, useRef, useState } from "react";
import "../css/DiscoveriesLanding.css";
import { useTranslation } from "react-i18next";
import MediaKit from "./mediakit";


export default function DiscoveriesLanding() {
  const { t } = useTranslation();

  const nameId = useId();
  const emailId = useId();
  const msgId = useId();
  const sentRef = useRef(null);

  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const onChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  function validate() {
    const e = {};
    if (!form.name.trim()) e.name = t("press.required");
    if (!form.email.trim()) e.email = t("press.required");
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = t("press.invalidEmail");
    if (!form.message.trim()) e.message = t("press.required");
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

  useEffect(() => {
    if (sent && sentRef.current) sentRef.current.focus();
  }, [sent]);

  return (
    <main className="discoveries-landing dino-landing" role="main">
      {/* HERO */}
      <section className="py-5 container" aria-labelledby="dl-hero-title">
        <h1 id="dl-hero-title" className="dl-title">
          {t("press.title2").toUpperCase()}
        </h1>
      </section>

      {/* CONTACT FORM */}
      <section
        id="contact"
        className="dl-contact dino-card container"
        aria-labelledby="contact-title"
      >
        <h2 id="contact-title" className="dl-h2">
          {t("press.contactUs").toUpperCase()}
        </h2>
        <form
          className="contact-form"
          onSubmit={onSubmit}
          noValidate
          aria-live="polite"
        >
          {sent && (
            <div ref={sentRef} tabIndex={-1} className="sent" role="status">
              {t("press.sent")}
            </div>
          )}

          <div className="form-row">
            <label htmlFor={nameId}>{t("press.name")}</label>
            <input
              id={nameId}
              name="name"
              value={form.name}
              onChange={onChange}
              className={errors.name ? "error" : ""}
              placeholder={t("press.placeholderName")}
              autoComplete="name"
              aria-invalid={Boolean(errors.name)}
            />
            {errors.name && <span className="err">{errors.name}</span>}
          </div>

          <div className="form-row">
            <label htmlFor={emailId}>{t("press.email")}</label>
            <input
              id={emailId}
              name="email"
              type="email"
              value={form.email}
              onChange={onChange}
              className={errors.email ? "error" : ""}
              placeholder={t("press.placeholderEmail")}
              autoComplete="email"
              aria-invalid={Boolean(errors.email)}
            />
            {errors.email && <span className="err">{errors.email}</span>}
          </div>

          <div className="form-row">
            <label htmlFor={msgId}>{t("press.message")}</label>
            <textarea
              id={msgId}
              name="message"
              rows={5}
              value={form.message}
              onChange={onChange}
              className={errors.message ? "error" : ""}
              placeholder={t("press.placeholderMessage")}
              aria-invalid={Boolean(errors.message)}
            />
            {errors.message && <span className="err">{errors.message}</span>}
          </div>

          <div className="actions">
            <button type="submit" className="btn-amber" disabled={loading}>
              {loading ? t("press.sending") : t("press.send")}
            </button>
            <a
              className="btn-ghost"
              href="mailto:team@apasur.org?subject=Discoveries%20Collab"
            >
              {t("press.emailUs")}
            </a>
          </div>
        </form>

      </section>

      <MediaKit/>
    </main>
  );
}