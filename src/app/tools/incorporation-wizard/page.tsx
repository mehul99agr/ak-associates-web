'use client'
import { useState } from 'react'
import Link from 'next/link'

export default function IncorporationWizard() {
  const [step, setStep] = useState(0)
  const [answers, setAnswers] = useState<Record<number, string>>({})
  
  const questions = [
    {
      q: "Do you plan to raise funding from Angel Investors or Venture Capitalists in the future?",
      options: [
        { label: "Yes, definitely.", value: "pvt" },
        { label: "No, we plan to bootstrap or take bank loans.", value: "llp" }
      ]
    },
    {
      q: "How many co-founders/partners are starting this venture?",
      options: [
        { label: "Just me (Sole Founder)", value: "opc" },
        { label: "Two or more founders", value: "both" }
      ]
    },
    {
      q: "Are you concerned about high annual compliance costs (Audit, ROC filings)?",
      options: [
        { label: "Yes, we want minimal compliance.", value: "llp" },
        { label: "No, we can manage standard corporate compliance.", value: "pvt" }
      ]
    },
    {
      q: "Do you intend to issue ESOPs (Employee Stock Options) to attract talent?",
      options: [
        { label: "Yes, ESOPs are crucial for us.", value: "pvt" },
        { label: "No, we will offer cash/profit-sharing.", value: "llp" }
      ]
    }
  ]

  const handleAnswer = (val: string) => {
    setAnswers({ ...answers, [step]: val })
    setStep(step + 1)
  }

  const getRecommendation = () => {
    let pvtScore = 0;
    let llpScore = 0;
    
    Object.values(answers).forEach(val => {
      if (val === 'pvt') pvtScore += 2;
      if (val === 'llp') llpScore += 2;
      if (val === 'opc') pvtScore += 1; // Leaning towards Pvt Ltd (OPC)
    });

    if (answers[0] === 'pvt' || answers[3] === 'pvt') return 'Private Limited Company';
    if (llpScore > pvtScore) return 'Limited Liability Partnership (LLP)';
    return 'Private Limited Company';
  }

  return (
    <div className="section" style={{ background: 'var(--bg-surface)', minHeight: '100vh', paddingTop: '140px' }}>
      <div className="container">
        <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 60px' }}>
          <h4 className="section-badge">Business Advisory</h4>
          <h1 className="section-title">Should I Incorporate?</h1>
          <p style={{ color: 'var(--text-light)', fontSize: '1.1rem' }}>
            Answer 4 simple questions to find out the best legal structure for your new business.
          </p>
        </div>

        <div className="card" style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
          {step < questions.length ? (
            <div>
              <div style={{ color: 'var(--accent)', fontWeight: 700, marginBottom: '20px', fontSize: '0.9rem' }}>
                QUESTION {step + 1} OF {questions.length}
              </div>
              <h2 style={{ fontSize: '1.4rem', marginBottom: '30px', lineHeight: 1.4 }}>{questions[step].q}</h2>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                {questions[step].options.map((opt, i) => (
                  <button 
                    key={i} 
                    onClick={() => handleAnswer(opt.value)}
                    style={{
                      padding: '15px 20px',
                      background: '#fff',
                      border: '2px solid var(--border)',
                      borderRadius: '8px',
                      fontSize: '1rem',
                      fontWeight: 600,
                      cursor: 'pointer',
                      transition: 'all 0.2s',
                      color: 'var(--text-main)'
                    }}
                    onMouseOver={(e) => (e.currentTarget.style.borderColor = 'var(--primary)')}
                    onMouseOut={(e) => (e.currentTarget.style.borderColor = 'var(--border)')}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div>
              <div style={{ fontSize: '3rem', marginBottom: '15px' }}>🎉</div>
              <h3 style={{ color: 'var(--text-light)', marginBottom: '10px' }}>Your Ideal Business Structure is:</h3>
              <h2 style={{ fontSize: '2rem', color: 'var(--primary)', marginBottom: '30px' }}>{getRecommendation()}</h2>
              
              <p style={{ color: 'var(--text-light)', marginBottom: '30px', fontSize: '0.95rem' }}>
                {getRecommendation() === 'Private Limited Company' 
                  ? "A Private Limited structure is best for raising funds, issuing ESOPs, and building a scalable tech/growth startup. It carries higher compliance but offers immense credibility."
                  : "An LLP is perfect for professional services, agencies, and bootstrapped businesses. It offers the benefit of limited liability with significantly lower annual compliance costs than a Pvt Ltd company."}
              </p>

              <div style={{ display: 'flex', gap: '15px', justifyContent: 'center' }}>
                <button onClick={() => {setStep(0); setAnswers({});}} className="btn btn-outline">Retake Quiz</button>
                <Link href="/startups" className="btn btn-primary">Consult Expert</Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
