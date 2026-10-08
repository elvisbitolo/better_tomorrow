'use client'

import { useState } from 'react'
import { EMAIL, WHATSAPP_DISPLAY, whatsAppLink } from '../lib/site'

const STATUS = {
  idle: 'idle',
  sending: 'sending',
  sent: 'sent',
  error: 'error',
}

export default function ContactForm() {
  const [status, setStatus] = useState(STATUS.idle)
  const [error, setError] = useState('')

  async function handleSubmit(event) {
    event.preventDefault()
    const form = event.currentTarget
    const body = new URLSearchParams(new FormData(form))

    if (body.get('bot-field')) {
      form.reset()
      setStatus(STATUS.sent)
      return
    }

    setStatus(STATUS.sending)
    setError('')

    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: body.toString(),
      })
      if (!response.ok) throw new Error(`HTTP ${response.status}`)
      form.reset()
      setStatus(STATUS.sent)
    } catch {
      setStatus(STATUS.error)
      setError(
        'Your message could not be sent. Please try WhatsApp or email instead.'
      )
    }
  }

  if (status === STATUS.sent) {
    return (
      <div className="formCard">
        <div className="formStatus formStatusOk" role="status">
          Thank you — your message has been sent. We usually reply within a
          day.
        </div>
        <p className="formAlt">
          Need a faster answer? Message us on{' '}
          <a
            href={whatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp {WHATSAPP_DISPLAY}
          </a>{' '}
          or email <a href={`mailto:${EMAIL}`}>{EMAIL}</a>.
        </p>
      </div>
    )
  }

  return (
    <form
      className="contactForm"
      name="contact"
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
    >
      <input type="hidden" name="form-name" value="contact" />

      <p className="honeypot" aria-hidden="true">
        <label>
          Leave this field empty
          <input
            name="bot-field"
            tabIndex={-1}
            autoComplete="off"
            defaultValue=""
          />
        </label>
      </p>

      {status === STATUS.error && (
        <div className="formStatus formStatusErr" role="alert">
          {error}
        </div>
      )}

      <div className="field">
        <label htmlFor="contact-name">Your name</label>
        <input
          id="contact-name"
          name="name"
          type="text"
          required
          autoComplete="name"
        />
      </div>

      <div className="field">
        <label htmlFor="contact-email">Email</label>
        <input
          id="contact-email"
          name="email"
          type="email"
          required
          autoComplete="email"
        />
      </div>

      <div className="field">
        <label htmlFor="contact-phone">
          Phone or WhatsApp <span className="optional">(optional)</span>
        </label>
        <input
          id="contact-phone"
          name="phone"
          type="tel"
          autoComplete="tel"
        />
      </div>

      <div className="field">
        <label htmlFor="contact-message">How can we help?</label>
        <textarea
          id="contact-message"
          name="message"
          required
          placeholder="Admissions, volunteering, donations…"
        />
      </div>

      <button
        className="btn btnSolid formSubmit"
        type="submit"
        disabled={status === STATUS.sending}
      >
        {status === STATUS.sending ? 'Sending…' : 'Send message'}
      </button>

      <p className="formAlt">
        Prefer instant answers?{' '}
        <a
          href={whatsAppLink()}
          target="_blank"
          rel="noopener noreferrer"
        >
          Message us on WhatsApp {WHATSAPP_DISPLAY}
        </a>
        .
      </p>
    </form>
  )
}
