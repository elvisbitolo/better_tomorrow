export const SITE_URL = 'https://better-tomorrow-school.netlify.app'

export const WHATSAPP_NUMBER = '254113053129'

export const WHATSAPP_DISPLAY = '+254 113 053 129'

export const WHATSAPP_MESSAGE =
  "Hello Better Tomorrow School! I'd like to know more about the school."

export function whatsAppLink(message = WHATSAPP_MESSAGE) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}
