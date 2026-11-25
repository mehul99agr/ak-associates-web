import { ENQUIRY_TIMELINES, ENQUIRY_TOPICS, WEB3FORMS_KEY } from './consult'

// Shared by the on-page EnquiryForm and the WebMCP `request_free_call` tool, so a
// human and an AI agent submit exactly the same enquiry to the same inbox.

export const ENQUIRY_COUNTRIES = ['India', 'United States', 'United Kingdom', 'UAE', 'Canada', 'Singapore', 'Australia', 'Other'] as const

export type EnquiryKind = 'free-call' | 'enquiry'

export type EnquiryInput = {
  name: string
  email: string
  topic: string
  country: string
  timeline: string
  message: string
}

export function enquirySubject(kind: EnquiryKind, input: EnquiryInput) {
  const topicLabel = ENQUIRY_TOPICS.find((t) => t.slug === input.topic)?.label ?? input.topic
  return `${kind === 'free-call' ? 'Free 15-min call request' : 'Website enquiry'}: ${topicLabel} (${input.country})`
}

export function enquiryLabels(input: EnquiryInput) {
  return {
    topicLabel: ENQUIRY_TOPICS.find((t) => t.slug === input.topic)?.label ?? input.topic,
    timelineLabel: ENQUIRY_TIMELINES.find((t) => t.slug === input.timeline)?.label ?? input.timeline,
  }
}

/** Posts the enquiry to Web3Forms. Throws on failure. `source` is recorded in the email. */
export async function submitEnquiry(kind: EnquiryKind, input: EnquiryInput, source: string) {
  if (!WEB3FORMS_KEY) throw new Error('Enquiry form is not configured')
  const { topicLabel, timelineLabel } = enquiryLabels(input)
  const res = await fetch('https://api.web3forms.com/submit', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify({
      access_key: WEB3FORMS_KEY,
      subject: enquirySubject(kind, input),
      from_name: 'agrawalkhandelwal.com',
      replyto: input.email,
      name: input.name,
      email: input.email,
      country: input.country,
      topic: topicLabel,
      timeline: timelineLabel,
      message: input.message,
      request: kind === 'free-call' ? 'Free 15-min call request' : 'Website enquiry',
      page: window.location.pathname,
      source,
    }),
  })
  const json = await res.json().catch(() => ({}))
  if (!res.ok || !json.success) throw new Error(json.message || 'Submit failed')
}
