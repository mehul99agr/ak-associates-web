import type { Metadata } from 'next'
import { buildBreadcrumbLd } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy for Agrawal Khandelwal & Associates LLP, describing how we handle cookies, analytics data, enquiry forms, bookings, and personal information collected on this website.',
  alternates: { canonical: 'https://agrawalkhandelwal.com/privacy-policy' },
}

const breadcrumbLd = buildBreadcrumbLd([
  { name: 'Home', item: 'https://agrawalkhandelwal.com' },
  { name: 'Privacy Policy', item: 'https://agrawalkhandelwal.com/privacy-policy' },
])

export default function PrivacyPolicy() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <div style={{ paddingTop: '100px' }}>
        <div className="section">
          <div className="container" style={{ maxWidth: '820px' }}>
            <h1 className="section-title" style={{ fontSize: 'clamp(2rem, 5vw, 2.75rem)', marginBottom: '0.5rem' }}>Privacy Policy</h1>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '2.5rem' }}>Last updated: November 21, 2026</p>

            <div className="blog-content">
              <p>
                Agrawal Khandelwal &amp; Associates LLP (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;) operates
                agrawalkhandelwal.com. This Privacy Policy explains what information this website collects, how it is
                used, and the choices available to you. This website does not host any client login, document
                upload, or payment functionality. Paid calls are booked and paid for on Zoho Bookings, outside this
                website.
              </p>

              <h2>Information We Collect</h2>
              <p>
                You do not need to create an account or submit a form to browse this website. The information we
                receive is:
              </p>
              <ul>
                <li><strong>Analytics data</strong> via Google Analytics (GA4) - page views, approximate location
                  (city/country level, derived from IP address), device and browser type, and which buttons you
                  click (for example, Email or Book Consultation), and whether an enquiry form was submitted (with
                  the topic and timeline you chose, never your name, email or message). We use Google Consent Mode:
                  until you accept cookies through the consent banner, Google Analytics sets no cookies and sends
                  only cookieless signals that carry no identifier for you or your device. Full analytics, with
                  cookies, start only after you click Accept.</li>
                <li><strong>Enquiry and free-call forms</strong>. If you fill in a form on this website, we receive your
                  name, email address, the topic and timeline you choose, where you are based, and your message, along
                  with the page you sent it from. The form is delivered to our inbox by Web3Forms, a form-to-email
                  service; we do not store it in a database on this website.</li>
                <li><strong>Requests sent by an AI assistant</strong>. Pages on this website let an AI assistant
                  working in your browser, with your permission, send the same free-call request on your behalf. It
                  sends the same details as the form, by the same route, and is marked as sent by an assistant.</li>
                <li><strong>Information you volunteer directly</strong>, such as your name, phone number, or email
                  address, if you choose to email us, book a free intro call on our Google Calendar booking page,
                  book and pay for a consultation call on our Zoho Bookings page, or message us on WhatsApp after a
                  paid booking. Paid bookings and payments are handled by Zoho; we receive your booking details, the
                  payment status and amount, but never your card, UPI or bank details. That information is handled
                  per Google&rsquo;s, Zoho&rsquo;s and WhatsApp&rsquo;s respective privacy policies once you leave
                  this website, and by us directly as part of providing professional services to you.</li>
              </ul>

              <h2>Cookies</h2>
              <p>
                We use a single analytics cookie set (Google Analytics) to understand how visitors use this site, and
                only after you accept it on the cookie banner. If you decline, no analytics cookies are set and Google
                Analytics receives only cookieless, non-identifying signals. We do not use advertising or retargeting
                cookies, and advertising signals are always switched off. You can change your choice by clearing your
                browser&rsquo;s local storage for this site, which shows the banner again.
              </p>

              <h2>Third-Party Services</h2>
              <p>We use the following third-party services, each governed by its own privacy policy:</p>
              <ul>
                <li><strong>Google Analytics</strong> - website usage analytics.</li>
                <li><strong>Google Maps</strong> - embedded office location maps on our home, contact and office pages.</li>
                <li><strong>Web3Forms</strong> - delivers enquiry and free-call form submissions to our email inbox.</li>
                <li><strong>Google Calendar</strong> - booking page for the free 15-minute intro call.</li>
                <li><strong>Zoho Bookings</strong> - booking and payment for paid consultation calls.</li>
                <li><strong>WhatsApp</strong> - when you message us on WhatsApp after booking a paid call (the number is shared in the booking confirmation).</li>
                <li><strong>Vercel</strong> - our website hosting provider, which may log standard server
                  request data (IP address, timestamp) for performance and security purposes.</li>
              </ul>

              <h2>How We Use Information</h2>
              <p>
                Analytics data is used only to understand which pages and services visitors find useful, so we can
                improve this website. Information you volunteer by contacting us directly is used solely to respond
                to your enquiry or provide the professional services you request, and is handled with the
                confidentiality expected of a Chartered Accountancy practice.
              </p>

              <h2>Data Retention</h2>
              <p>
                Analytics data is retained per Google Analytics&rsquo; standard retention settings. Form submissions
                are kept in our email inbox for as long as needed to respond to you and follow up. Client engagement
                records are retained per applicable professional and regulatory record-keeping requirements
                (including ICAI guidelines and the Income Tax Act, 1961), independent of this website.
              </p>

              <h2>Your Rights</h2>
              <p>
                Under India&rsquo;s Digital Personal Data Protection Act, 2023, you have the right to access, correct,
                or request erasure of personal data we hold about you, and to withdraw consent for analytics
                cookies at any time. To exercise these rights, contact us using the details below.
              </p>

              <h2>Contact</h2>
              <p>
                For privacy-related questions or requests, contact us at{' '}
                <a href="mailto:mehul@agrawalkhandelwal.com" style={{ color: 'var(--primary)', fontWeight: 600 }}>mehul@agrawalkhandelwal.com</a> or{' '}
                <a href="mailto:rupesh@agrawalkhandelwal.com" style={{ color: 'var(--primary)', fontWeight: 600 }}>rupesh@agrawalkhandelwal.com</a>.
              </p>

              <h2>Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time to reflect changes in our practices or
                applicable law. The &ldquo;Last updated&rdquo; date above reflects the most recent revision.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
