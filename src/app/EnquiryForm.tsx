'use client'
import { FormEvent, useEffect, useState } from 'react'
import {
  ENQUIRY_TIMELINES,
  ENQUIRY_TOPICS,
  FREE_CALL_BOOKING_URL,
  FREE_CALL_OFFER,
  WEB3FORMS_KEY,
  type EnquiryTopic,
} from '@/lib/consult'
import { OFFICES } from '@/lib/constants'

// Free enquiry form, delivered by Web3Forms (see src/lib/consult.ts).
// mode="free-call": the screening step for the free 15-minute call. After a
//   successful submit, visitors who are not "just exploring" get the free booking
//   link (or, until that link exists, a promise that we email them a slot).
// mode="enquiry": a plain written question, answered by email.

type Mode = 'free-call' | 'enquiry'
type Status = 'idle' | 'sending' | 'sent' | 'error'

const COUNTRIES = ['India', 'United States', 'UAE', 'United Kingdom', 'Other']

const label = { display: 'block', fontWeight: 600, fontSize: '0.9rem', marginBottom: '0.35rem', color: 'var(--text-main)' } as const
const field = { width: '100%', padding: '0.7rem 0.85rem', borderRadius: 'var(--radius-sm)', fontSize: '0.95rem', fontFamily: 'inherit' } as const

function isTopic(v: string | null): v is EnquiryTopic {
  return !!v && ENQUIRY_TOPICS.some((t) => t.slug === v)
}

export default function EnquiryForm({
  mode = 'enquiry',
  topic,
  location,
  readTopicFromUrl = false,
}: {
  mode?: Mode
  topic?: EnquiryTopic
  location: string
  readTopicFromUrl?: boolean
}) {
  const [status, setStatus] = useState<Status>('idle')
  const [selectedTopic, setSelectedTopic] = useState<string>(topic ?? '')
  const [timeline, setTimeline] = useState<string>('')

  // /consult?topic=us-cross-border arrives with the topic preselected.
  useEffect(() => {
    if (!readTopicFromUrl) return
    const t = new URLSearchParams(window.location.search).get('topic')
    if (isTopic(t)) setSelectedTopic(t)
  }, [readTopicFromUrl])

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = Object.fromEntries(new FormData(form).entries()) as Record<string, string>
    if (data.botcheck) return

    const topicLabel = ENQUIRY_TOPICS.find((t) => t.slug === data.topic)?.label ?? data.topic
    const timelineLabel = ENQUIRY_TIMELINES.find((t) => t.slug === data.timeline)?.label ?? data.timeline
    const kind = mode === 'free-call' ? 'Free 15-min call request' : 'Website enquiry'
    const subject = `${kind}: ${topicLabel} (${data.country})`

    // No key configured yet: hand the enquiry to the visitor's email app instead.
    if (!WEB3FORMS_KEY) {
      const body = `Name: ${data.name}\nCountry: ${data.country}\nTopic: ${topicLabel}\nTimeline: ${timelineLabel}\n\n${data.message}`
      window.location.href = `mailto:${OFFICES.nashik.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
      window.gtag?.('event', 'generate_lead', { form: mode, topic: data.topic, timeline: data.timeline, location, channel: 'mailto' })
      setStatus('sent')
      return
    }

    setStatus('sending')
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject,
          from_name: 'agrawalkhandelwal.com',
          replyto: data.email,
          name: data.name,
          email: data.email,
          country: data.country,
          topic: topicLabel,
          timeline: timelineLabel,
          message: data.message,
          request: kind,
          page: window.location.pathname,
        }),
      })
      const json = await res.json().catch(() => ({}))
      if (!res.ok || !json.success) throw new Error(json.message || 'Submit failed')
      window.gtag?.('event', 'generate_lead', { form: mode, topic: data.topic, timeline: data.timeline, location })
      setStatus('sent')
      form.reset()
    } catch {
      setStatus('error')
    }
  }

  if (status === 'sent') {
    const qualifies = mode === 'free-call' && timeline !== 'exploring'
    return (
      <div role="status" style={{ padding: '1.5rem', background: 'var(--bg-surface)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)', borderLeft: '4px solid var(--success)' }}>
        <p style={{ fontWeight: 800, color: 'var(--primary)', marginBottom: '0.5rem' }}>Thank you. We have your details.</p>
        {qualifies && FREE_CALL_BOOKING_URL ? (
          <>
            <p style={{ color: 'var(--text-light)', marginBottom: '1rem' }}>Pick a time for your {FREE_CALL_OFFER.minutes}-minute call. It is free.</p>
            <a
              href={FREE_CALL_BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
              data-tracked="1"
              onClick={() => window.gtag?.('event', 'contact_click', { method: 'booking', location: `${location}_free_call` })}
            >
              Choose your free slot
            </a>
          </>
        ) : qualifies ? (
          <p style={{ color: 'var(--text-light)', margin: 0 }}>We will email you within one business day with a slot for your free {FREE_CALL_OFFER.minutes}-minute call.</p>
        ) : (
          <p style={{ color: 'var(--text-light)', margin: 0 }}>We will reply by email within one business day.</p>
        )}
      </div>
    )
  }

  const idp = `${location}-`
  return (
    <form onSubmit={onSubmit} style={{ display: 'grid', gap: '1rem' }}>
      <input type="checkbox" name="botcheck" tabIndex={-1} autoComplete="off" style={{ display: 'none' }} aria-hidden="true" />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 200px), 1fr))', gap: '1rem' }}>
        <div>
          <label htmlFor={`${idp}name`} style={label}>Your name</label>
          <input id={`${idp}name`} name="name" required maxLength={100} autoComplete="name" style={field} />
        </div>
        <div>
          <label htmlFor={`${idp}email`} style={label}>Email</label>
          <input id={`${idp}email`} name="email" type="email" required maxLength={150} autoComplete="email" style={field} />
        </div>
      </div>
      <div>
        <label htmlFor={`${idp}topic`} style={label}>What do you need help with?</label>
        <select id={`${idp}topic`} name="topic" required value={selectedTopic} onChange={(e) => setSelectedTopic(e.target.value)} style={field}>
          <option value="" disabled>Choose one</option>
          {ENQUIRY_TOPICS.map((t) => <option key={t.slug} value={t.slug}>{t.label}</option>)}
        </select>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 200px), 1fr))', gap: '1rem' }}>
        <div>
          <label htmlFor={`${idp}country`} style={label}>Where are you based?</label>
          <select id={`${idp}country`} name="country" required defaultValue="" style={field}>
            <option value="" disabled>Choose one</option>
            {COUNTRIES.map((c) => <option key={c} value={c}>{c}</option>)}
          </select>
        </div>
        <div>
          <label htmlFor={`${idp}timeline`} style={label}>When do you need it?</label>
          <select id={`${idp}timeline`} name="timeline" required value={timeline} onChange={(e) => setTimeline(e.target.value)} style={field}>
            <option value="" disabled>Choose one</option>
            {ENQUIRY_TIMELINES.map((t) => <option key={t.slug} value={t.slug}>{t.label}</option>)}
          </select>
        </div>
      </div>
      <div>
        <label htmlFor={`${idp}message`} style={label}>{mode === 'free-call' ? 'Briefly, what is your situation?' : 'Your question'}</label>
        <textarea id={`${idp}message`} name="message" required minLength={20} maxLength={2000} rows={4} style={{ ...field, resize: 'vertical' }} />
      </div>
      {status === 'error' && (
        <p role="alert" style={{ color: 'var(--danger)', margin: 0, fontSize: '0.9rem' }}>
          Sorry, that did not go through. Please try again or email {OFFICES.nashik.email}.
        </p>
      )}
      <button type="submit" className="btn btn-primary" disabled={status === 'sending'} style={{ width: '100%' }}>
        {status === 'sending' ? 'Sending…' : mode === 'free-call' ? 'Request my free call' : 'Send my question'}
      </button>
      <p style={{ fontSize: '0.8rem', color: 'var(--text-light)', margin: 0, textAlign: 'center' }}>
        We use your details only to reply to you. See our <a href="/privacy-policy" style={{ color: 'var(--primary)' }}>privacy policy</a>.
      </p>
    </form>
  )
}
