'use client'
import { useEffect } from 'react'
import {
  CONSULT_BOOKING_URL,
  CONSULT_OFFER,
  ENQUIRY_TIMELINES,
  ENQUIRY_TOPICS,
  FREE_CALL_BOOKING_URL,
  FREE_CALL_OFFER,
} from '@/lib/consult'
import { BASE_URL, OFFICES } from '@/lib/constants'
import { ENQUIRY_COUNTRIES, submitEnquiry, type EnquiryInput } from '@/lib/enquiry'

// WebMCP: exposes booking actions to AI agents running in the visitor's browser
// (e.g. an assistant acting for the user in Chrome), so the agent can call a typed
// tool instead of guessing at the form. Only runs where `navigator.modelContext`
// exists; everywhere else this component does nothing.
// Tools: get_consultation_options (read-only) and request_free_call (sends the same
// enquiry as the on-page form, via src/lib/enquiry.ts).

type ToolResult = { content: { type: 'text'; text: string }[]; isError?: boolean }
type WebMcpTool = {
  name: string
  description: string
  inputSchema: Record<string, unknown>
  annotations?: Record<string, unknown>
  execute: (input: Record<string, unknown>) => Promise<ToolResult>
}
type ModelContext = {
  registerTool?: (tool: WebMcpTool) => unknown
  unregisterTool?: (name: string) => unknown
  provideContext?: (ctx: { tools: WebMcpTool[] }) => unknown
}

const text = (t: string, isError = false): ToolResult => ({ content: [{ type: 'text', text: t }], ...(isError ? { isError } : {}) })

const TOPIC_SLUGS = ENQUIRY_TOPICS.map((t) => t.slug)
const TIMELINE_SLUGS = ENQUIRY_TIMELINES.map((t) => t.slug)

function optionsSummary() {
  return JSON.stringify({
    firm: 'Agrawal Khandelwal & Associates LLP, Chartered Accountants (Nashik and Sillod, India)',
    host: 'CA Mehul Agrawal takes all calls, on Google Meet, from any time zone',
    options: [
      {
        type: 'free_intro_call',
        minutes: FREE_CALL_OFFER.minutes,
        price: 'Free',
        how: 'Call request_free_call with the user\'s details. If the timeline is not "exploring", the result includes a link where the user picks a slot.',
      },
      {
        type: 'paid_advice_call',
        minutes: CONSULT_OFFER.minutes,
        price: `${CONSULT_OFFER.priceLabel} (${CONSULT_OFFER.usdApprox}), adjusted against the firm's fee if the user engages the firm`,
        booking_url: CONSULT_BOOKING_URL,
        how: 'The user must choose a slot and pay on this page themselves.',
      },
      {
        type: 'email',
        price: 'Free',
        email: OFFICES.nashik.email,
        reply: 'Within one business day',
      },
    ],
    topics: ENQUIRY_TOPICS,
    page: `${BASE_URL}/consult`,
  }, null, 2)
}

const tools: WebMcpTool[] = [
  {
    name: 'get_consultation_options',
    description:
      'Get the ways to consult Agrawal Khandelwal & Associates LLP (Chartered Accountants, India): a free 15-minute intro call, a paid 30-minute advice call, or free email. Returns prices, booking links and the topics the firm handles. Read-only.',
    inputSchema: { type: 'object', properties: {} },
    annotations: { readOnlyHint: true },
    execute: async () => text(optionsSummary()),
  },
  {
    name: 'request_free_call',
    description:
      'Request a free 15-minute intro call with a Chartered Accountant at Agrawal Khandelwal & Associates LLP. Sends the user\'s name, email and situation to the firm by email. Only call this after the user has agreed to share these details. Do not include passwords, PAN, Aadhaar, bank or card numbers. If the timeline is "urgent" or "soon", the result includes a link where the user picks their slot.',
    inputSchema: {
      type: 'object',
      properties: {
        name: { type: 'string', description: 'The user\'s full name', maxLength: 100 },
        email: { type: 'string', description: 'The user\'s email address, for the reply', format: 'email', maxLength: 150 },
        topic: { type: 'string', enum: TOPIC_SLUGS, description: 'What the user needs help with' },
        country: { type: 'string', enum: [...ENQUIRY_COUNTRIES], description: 'Where the user is based' },
        timeline: { type: 'string', enum: TIMELINE_SLUGS, description: 'urgent = within 2 weeks, soon = 1 to 3 months, exploring = just exploring' },
        message: { type: 'string', description: 'A short description of the user\'s situation, at least 20 characters', minLength: 20, maxLength: 2000 },
      },
      required: ['name', 'email', 'topic', 'country', 'timeline', 'message'],
    },
    execute: async (raw) => {
      const input = {
        name: String(raw.name ?? '').trim(),
        email: String(raw.email ?? '').trim(),
        topic: String(raw.topic ?? ''),
        country: String(raw.country ?? ''),
        timeline: String(raw.timeline ?? ''),
        message: String(raw.message ?? '').trim(),
      } satisfies EnquiryInput
      const problems: string[] = []
      if (!input.name) problems.push('name is required')
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.email)) problems.push('email is not valid')
      if (!TOPIC_SLUGS.includes(input.topic as never)) problems.push(`topic must be one of: ${TOPIC_SLUGS.join(', ')}`)
      if (!ENQUIRY_COUNTRIES.includes(input.country as never)) problems.push(`country must be one of: ${ENQUIRY_COUNTRIES.join(', ')}`)
      if (!TIMELINE_SLUGS.includes(input.timeline as never)) problems.push(`timeline must be one of: ${TIMELINE_SLUGS.join(', ')}`)
      if (input.message.length < 20) problems.push('message must be at least 20 characters')
      if (problems.length) return text(`Not sent: ${problems.join('; ')}.`, true)

      try {
        await submitEnquiry('free-call', input, 'webmcp')
      } catch {
        return text(`Not sent because of a network or service error. The user can email ${OFFICES.nashik.email} instead.`, true)
      }
      window.gtag?.('event', 'generate_lead', { form: 'free-call', topic: input.topic, timeline: input.timeline, location: 'webmcp', channel: 'webmcp' })

      if (input.timeline !== 'exploring' && FREE_CALL_BOOKING_URL) {
        return text(`Sent. The firm has the user's details. The user can now pick a time for the free ${FREE_CALL_OFFER.minutes}-minute call here: ${FREE_CALL_BOOKING_URL}`)
      }
      return text('Sent. The firm will reply to the user by email within one business day.')
    },
  },
]

export default function WebMcpTools() {
  useEffect(() => {
    const mc = (navigator as Navigator & { modelContext?: ModelContext }).modelContext
    if (!mc) return
    try {
      if (typeof mc.registerTool === 'function') {
        tools.forEach((t) => mc.registerTool!(t))
        return () => {
          tools.forEach((t) => {
            try { mc.unregisterTool?.(t.name) } catch {}
          })
        }
      }
      if (typeof mc.provideContext === 'function') mc.provideContext({ tools })
    } catch {
      // An agent API we do not understand must never break the page.
    }
  }, [])
  return null
}
