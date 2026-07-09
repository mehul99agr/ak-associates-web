import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Use',
  description: 'Terms of Use governing access to the Agrawal Khandelwal & Associates LLP website.',
  alternates: { canonical: 'https://agrawalkhandelwal.com/terms-of-use' },
}

const breadcrumbLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://agrawalkhandelwal.com' },
    { '@type': 'ListItem', position: 2, name: 'Terms of Use', item: 'https://agrawalkhandelwal.com/terms-of-use' },
  ],
}

export default function TermsOfUse() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <div style={{ paddingTop: '130px' }}>
        <div className="section">
          <div className="container" style={{ maxWidth: '820px' }}>
            <h1 className="section-title" style={{ fontSize: 'clamp(2rem, 5vw, 2.75rem)', marginBottom: '0.5rem' }}>Terms of Use</h1>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '2.5rem' }}>Last updated: July 9, 2026</p>

            <div className="blog-content">
              <p>
                These Terms of Use govern your access to and use of agrawalkhandelwal.com (the &ldquo;Website&rdquo;),
                operated by Agrawal Khandelwal &amp; Associates LLP, ICAI Firm Registration No. W101119, LLPIN
                ACO-7072 (&ldquo;the Firm&rdquo;). By accessing this Website, you agree to these terms.
              </p>

              <h2>Use of This Website</h2>
              <p>
                This Website is provided for general informational purposes about the Firm and its services. You may
                browse and read its content for personal, non-commercial reference. You may not reproduce, resell,
                or redistribute content from this Website without our prior written consent.
              </p>

              <h2>No Professional Advice</h2>
              <p>
                Content on this Website &mdash; including blog articles, calculators, and service descriptions
                &mdash; is provided for general informational purposes only and does not constitute professional
                tax, legal, financial, or accounting advice. Tax laws and regulations referenced on this Website are
                subject to change, and their application depends on your specific facts and circumstances. You
                should not act, or refrain from acting, on the basis of any content on this Website without seeking
                professional advice specific to your situation. Engaging the Firm for a formal consultation or
                engagement letter is the only way to obtain advice you may rely upon.
              </p>

              <h2>Tools and Calculators</h2>
              <p>
                Calculators and interactive tools on this Website (including the income tax calculator, capital
                gains calculator, SIP planner, and incorporation wizard) provide indicative estimates only, based on
                the inputs you provide and simplified assumptions. They are not a substitute for a formal
                computation prepared by a Chartered Accountant and should not be relied upon for filing returns or
                making financial decisions.
              </p>

              <h2>Intellectual Property</h2>
              <p>
                All trademarks, logos, and content on this Website, unless otherwise credited, are the property of
                the Firm and are protected under applicable Indian intellectual property law.
              </p>

              <h2>Third-Party Links</h2>
              <p>
                This Website may link to third-party websites (such as ICAI, government portals, or publications we
                have contributed to) for reference. We do not control and are not responsible for the content or
                practices of those third-party sites.
              </p>

              <h2>Limitation of Liability</h2>
              <p>
                The Firm makes reasonable efforts to keep information on this Website accurate and current, but
                makes no warranty as to its completeness or accuracy. To the fullest extent permitted by law, the
                Firm shall not be liable for any loss or damage arising from reliance on information published on
                this Website in the absence of a formal engagement with the Firm.
              </p>

              <h2>Governing Law</h2>
              <p>
                These Terms are governed by the laws of India, and any disputes arising from your use of this
                Website shall be subject to the exclusive jurisdiction of the courts at Nashik, Maharashtra.
              </p>

              <h2>Changes to These Terms</h2>
              <p>
                We may revise these Terms from time to time. Continued use of the Website after changes are posted
                constitutes acceptance of the revised Terms.
              </p>

              <h2>Contact</h2>
              <p>
                For questions about these Terms, contact us at{' '}
                <a href="mailto:mehul@agrawalkhandelwal.com" style={{ color: 'var(--primary)', fontWeight: 600 }}>mehul@agrawalkhandelwal.com</a>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
