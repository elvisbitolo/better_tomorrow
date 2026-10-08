'use client'

import { useEffect, useState } from 'react'
import { WHATSAPP_DISPLAY, WHATSAPP_MESSAGE, whatsAppLink } from '../lib/site'

export default function WhatsAppWidget() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!open) return undefined
    const onKey = (event) => {
      if (event.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <div className="waWidget">
      <div
        className={open ? 'waCard waCardOpen' : 'waCard'}
        id="wa-card"
        role="dialog"
        aria-label="Chat on WhatsApp"
        aria-hidden={!open}
      >
        <div className="waCardHead">
          <span className="waAvatar" aria-hidden="true">
            <svg viewBox="0 0 32 32" width="24" height="24" fill="currentColor">
              <path d="M16 3C9.4 3 4 8.4 4 15c0 2.1.6 4.2 1.6 6L4 29l8.2-1.5c1.2.5 2.5.7 3.8.7 6.6 0 12-5.4 12-12S22.6 3 16 3zm0 21.8c-1.2 0-2.4-.2-3.5-.7l-.5-.2-4.9.9 1-4.7-.3-.5c-1-1.5-1.5-3.2-1.5-5 0-5.4 4.4-9.8 9.8-9.8s9.8 4.4 9.8 9.8-4.4 9.8-9.9 9.8z" />
            </svg>
          </span>
          <span className="waCardTitle">
            Better Tomorrow School
            <span>Usually replies within a day</span>
          </span>
        </div>
        <p className="waCardBody">
          {WHATSAPP_MESSAGE}
        </p>
        <a
          className="waCardBtn"
          href={whatsAppLink()}
          target="_blank"
          rel="noopener noreferrer"
        >
          Start chatting
        </a>
        <span className="waCardFoot">{WHATSAPP_DISPLAY}</span>
      </div>

      <button
        type="button"
        className="waButton"
        aria-expanded={open}
        aria-controls="wa-card"
        aria-label={open ? 'Close WhatsApp chat' : 'Chat with us on WhatsApp'}
        title="Chat on WhatsApp"
        onClick={() => setOpen((value) => !value)}
      >
        <svg viewBox="0 0 32 32" width="30" height="30" fill="currentColor" aria-hidden="true">
          <path d="M16 3C9.4 3 4 8.4 4 15c0 2.1.6 4.2 1.6 6L4 29l8.2-1.5c1.2.5 2.5.7 3.8.7 6.6 0 12-5.4 12-12S22.6 3 16 3zm0 21.8c-1.2 0-2.4-.2-3.5-.7l-.5-.2-4.9.9 1-4.7-.3-.5c-1-1.5-1.5-3.2-1.5-5 0-5.4 4.4-9.8 9.8-9.8s9.8 4.4 9.8 9.8-4.4 9.8-9.9 9.8z" />
          <path d="M12.4 9.6c-.3-.6-.5-.6-.8-.6h-.7c-.2 0-.6.1-.9.4-.3.4-1.2 1.2-1.2 2.9s1.2 3.4 1.4 3.6c.2.2 2.4 3.8 5.9 5.2 2.9 1.1 3.5.9 4.1.9.6-.1 2-.8 2.3-1.6.3-.8.3-1.4.2-1.6-.1-.1-.3-.2-.6-.4l-2.3-1.1c-.3-.1-.5-.2-.8.2l-1 1.3c-.2.2-.4.2-.7.1-.3-.2-1.4-.5-2.6-1.6-1-.9-1.6-1.9-1.8-2.3-.2-.3 0-.5.1-.7l.6-.7c.2-.2.2-.4.4-.6.1-.2 0-.5 0-.7l-1-2.1z" />
        </svg>
      </button>
    </div>
  )
}
