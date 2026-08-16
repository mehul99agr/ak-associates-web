import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Disclaimer',
  description: 'Disclaimer regarding the informational nature of this website, in accordance with the ICAI Advertisement Guidelines applicable to Chartered Accountant firms in India.',
  alternates: { canonical: 'https://agrawalkhandelwal.com/disclaimer' },
}

const breadcrumbLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://agrawalkhandelwal.com' },
    { '@type': 'ListItem', position: 2, name: 'Disclaimer', item: 'https://agrawalkhandelwal.com/disclaimer' },
  ],
}

export default function Disclaimer() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <div style={{ paddingTop: '100px' }}>
        <div className="section">
          <div className="container" style={{ maxWidth: '820px' }}>
            <h1 className="section-title" style={{ fontSize: 'clamp(2rem, 5vw, 2.75rem)', marginBottom: '0.5rem' }}>Disclaimer</h1>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '2.5rem' }}>Last updated: July 9, 2026</p>

            <div className="blog-content">
              <p>
                Agrawal Khandelwal &amp; Associates LLP (ICAI Firm Registration No. W101119) is a firm of Chartered
                Accountants registered with the Institute of Chartered Accountants of India (ICAI). As per the Code
                of Ethics and Advertisement Guidelines issued by ICAI, Chartered Accountant firms in India are
                restricted from soliciting clients or professional work through advertising or promotional means.
              </p>

              <h2>No Solicitation</h2>
              <p>
                This website has been created solely to provide information about the Firm, its partners, and the
                services it offers, at the request and initiative of the visitor. Nothing on this website should be
                construed as a solicitation, invitation, or advertisement for professional engagement. By accessing
                this website, you confirm that you are doing so on your own initiative and that there has been no
                solicitation, invitation, or inducement of any sort from the Firm or any of its partners or
                employees.
              </p>

              <h2>Purpose of This Website</h2>
              <p>
                The information provided on this website is intended only to disseminate general information about
                the Firm, its people, and its areas of practice, in accordance with the rules and regulations
                applicable to Chartered Accountants in India. It is not intended to be a source of advertising or
                solicitation, and should not be construed as such.
              </p>

              <h2>Not Professional Advice</h2>
              <p>
                The Firm is not responsible for any consequence of any action taken by a visitor relying on
                material or information provided on this website without independently verifying it or obtaining
                specific professional advice. Tax, regulatory, and legal information changes frequently; visitors
                should confirm the current position with the Firm directly, or with ICAI, the Income Tax Department,
                or other relevant authority, before relying on it.
              </p>

              <h2>Accuracy of Information</h2>
              <p>
                While we make reasonable efforts to keep the information on this website accurate and up to date,
                the Firm makes no representation or warranty, express or implied, about the completeness, accuracy,
                reliability, or suitability of the information contained on this website for any purpose.
              </p>

              <h2>External Links</h2>
              <p>
                This website may reference or link to external websites, including government portals, ICAI, and
                third-party publications the Firm has contributed to. The Firm does not endorse and is not
                responsible for the content of any external website.
              </p>

              <h2>Governing Regulations</h2>
              <p>
                This disclaimer is issued in accordance with the guidelines issued by the Institute of Chartered
                Accountants of India regarding the maintenance of websites by members in practice.
              </p>

              <h2>Contact</h2>
              <p>
                For any queries regarding this disclaimer, contact us at{' '}
                <a href="mailto:mehul@agrawalkhandelwal.com" style={{ color: 'var(--primary)', fontWeight: 600 }}>mehul@agrawalkhandelwal.com</a>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
