import Link from 'next/link'

export default async function BlogPost(props: { params: Promise<{ slug: string }> }) {
  const { slug } = await props.params;
  
  const blogContent: Record<string, { title: string, category: string, date: string, content: string }> = {
    "understanding-new-tax-regime-2025-26": {
      title: "Understanding the New Tax Regime (FY 2025-26)",
      category: "Tax Planning",
      date: "March 18, 2026",
      content: `The Finance Act 2025 has brought significant changes to the New Tax Regime, making it increasingly attractive for middle and high-income earners. The standard deduction has been increased to ₹75,000, and the tax slabs have been further rationalized to provide greater relief.

      Key highlights include:
      1. Increased Standard Deduction: Now ₹75,000 for salaried individuals.
      2. Revised Slabs: Nil tax up to ₹4 Lakhs, with progressive rates thereafter.
      3. Rebate u/s 87A: Effectively no tax for income up to ₹7 Lakhs (and up to ₹12 Lakhs in specific scenarios).

      At Agrawal Khandelwal & Associates LLP, we recommend a thorough comparative analysis between the Old and New regimes before committing to a choice for the financial year.`
    },
    "essential-compliance-indian-startups": {
      title: "Essential Compliance for Indian Startups",
      category: "Corporate Law",
      date: "March 12, 2026",
      content: `For a startup in India, compliance is not just a legal requirement but a foundation for scaling and attracting investment. From MCA filings to GST returns, the regulatory landscape is vast.

      Checklist for New Startups:
      - Auditor Appointment: Within 30 days of incorporation.
      - Statutory Audits: Annual requirement under the Companies Act.
      - GST Filings: Monthly or quarterly depending on turnover.
      - TDS Compliance: Monthly deposit and quarterly returns.
      - FEMA Compliance: If receiving foreign investment (FDI).

      Navigating these requirements early prevents heavy penalties and ensures a 'due-diligence ready' status for future funding rounds.`
    },
    "navigating-international-taxation-dtaa": {
      title: "Navigating International Taxation & DTAA",
      category: "International Tax",
      date: "March 05, 2026",
      content: `In an era of global business, cross-border transactions are common. However, they bring the risk of double taxation. India's network of Double Taxation Avoidance Agreements (DTAA) provides relief.

      Critical Concepts:
      - Tax Residency Certificate (TRC): Essential to claim DTAA benefits.
      - Permanent Establishment (PE): Determining if a foreign entity has a taxable presence in India.
      - Withholding Tax (WHT): Rates vary significantly under DTAA vs. Income Tax Act.
      - Transfer Pricing: Ensuring 'Arm's Length Price' for transactions between related parties.

      Our firm specializes in helping multinationals optimize their global tax footprint while staying 100% compliant with both Indian and foreign regulations.`
    },
    "strategic-value-virtual-cfo-services": {
      title: "The Strategic Value of Virtual CFO Services",
      category: "Advisory",
      date: "February 25, 2026",
      content: `Many SMEs and startups reach a stage where basic accounting is not enough, but a full-time CFO is too expensive. This is where Virtual CFO services bridge the gap.

      What a Virtual CFO brings:
      - Strategic Budgeting: Planning for growth and managing burn rates.
      - MIS Reporting: Real-time insights into business performance.
      - Fundraise Support: Preparing pitch decks and financial models.
      - Risk Management: Identifying financial bottlenecks before they become crises.

      Investing in high-level financial leadership early can be the difference between a struggling business and a market leader.`
    }
  };

  const post = blogContent[slug] || {
    title: "Insight Not Found",
    category: "General",
    date: "N/A",
    content: "The requested blog post could not be found. Please return to the insights page."
  };

  return (
    <div className="section" style={{ background: 'var(--bg-surface)', minHeight: '100vh', paddingTop: '140px' }}>
      <div className="container">
        <Link href="/blog" style={{ color: 'var(--accent)', marginBottom: '30px', display: 'inline-block', fontWeight: 700 }}>
          &larr; Back to Insights
        </Link>
        
        <article style={{ background: '#fff', padding: '60px', borderRadius: '16px', boxShadow: '0 20px 40px rgba(0,0,0,0.05)', maxWidth: '900px', margin: '0 auto' }}>
          <span className="section-badge">{post.category}</span>
          <h1 style={{ fontSize: '3rem', marginTop: '10px', marginBottom: '20px', color: 'var(--primary)' }}>{post.title}</h1>
          <div style={{ display: 'flex', gap: '20px', color: 'var(--text-light)', marginBottom: '40px', fontSize: '0.9rem', fontWeight: 600 }}>
            <span>📅 {post.date}</span>
            <span>👤 CA Mehul Agrawal</span>
          </div>
          <div style={{ fontSize: '1.15rem', lineHeight: '1.8', color: 'var(--text-main)', whiteSpace: 'pre-line' }}>
            {post.content}
          </div>
          
          <div style={{ marginTop: '60px', paddingTop: '40px', borderTop: '1px solid var(--border)' }}>
            <h3 style={{ marginBottom: '15px' }}>Need expert advice on this topic?</h3>
            <p style={{ color: 'var(--text-light)', marginBottom: '25px' }}>Contact our partners today for a personalized consultation via WhatsApp.</p>
            <a href="https://wa.me/919527533506?text=Hi,%20I%20read%20your%20article%20about%20your%20blog%20and%20want%20to%20consult." className="btn btn-primary">Consult on WhatsApp</a>
          </div>
        </article>
      </div>
    </div>
  )
}
