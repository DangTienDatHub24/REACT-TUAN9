import { useState } from 'react'
import './Subscribe.css'
import dishImg from '../../assets/3_Data/Lab_04/dish.png'
import chefifyLogo from '../../assets/3_Data/Lab_02/chefify.png'

const BENEFITS = [
  '20,000+ recipes to suit all tastes and skill levels',
  'Filter for diets, cook times, and more',
  'Personal Recipe Box for favorites',
  'Gain exclusive access to our subscriber-only mobile app.',
]

const ACCESS_CARDS = [
  {
    title: 'Cooking',
    desc: 'Enjoy recipes, advice and inspiration for any occasion.',
  },
  {
    title: 'Wirecutter',
    desc: 'Explore independent reviews for thousands of products.',
  },
  {
    title: 'Games',
    desc: 'Unwind with Spelling Bee, Wordle, The Crossword',
  },
  {
    title: 'The Athletic',
    desc: 'Discover in-depth, personalized sports journalism.',
  },
]

function Subscribe({ onNavigateHome }) {
  const [plan, setPlan] = useState('monthly')

  return (
    <div className="sub-page">
      {/* ── BREADCRUMB ── */}
      <nav className="sub-breadcrumb">
        <button className="sub-bc-link" onClick={onNavigateHome}>Recipes</button>
        <span className="sub-bc-sep">›</span>
        <span className="sub-bc-current">Subscribe</span>
      </nav>

      {/* ── HERO SECTION ── */}
      <section className="sub-hero">
        <div className="sub-hero-left">
          <p className="sub-exclusive">This recipe is exclusively available to subscribers</p>
          <h1 className="sub-hero-title">
            Join now to access effortless,<br />hassle-free recipes
          </h1>

          <ul className="sub-benefits">
            {BENEFITS.map((b, i) => (
              <li key={i} className="sub-benefit-item">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="11" fill="#E63E6D" opacity="0.12"/>
                  <circle cx="12" cy="12" r="11" stroke="#E63E6D" strokeWidth="1.5"/>
                  <polyline points="7 12 10.5 15.5 17 9" stroke="#E63E6D" strokeWidth="2"
                    strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                {b}
              </li>
            ))}
          </ul>

          <div className="sub-price-block">
            <p className="sub-price">0.25<span className="sub-price-unit">USD / Week</span></p>
            <p className="sub-price-note">Billed as $1 every 4 weeks for the first year</p>
          </div>

          <button className="sub-cta-btn">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>
            </svg>
            Subscribe Now
          </button>
          <p className="sub-cancel">Cancel or Pause anytime</p>
        </div>

        <div className="sub-hero-right">
          <div className="sub-hero-img-wrap">
            <img src={dishImg} alt="Delicious food" className="sub-hero-img" />
          </div>
        </div>
      </section>

      {/* ── ALL ACCESS SECTION ── */}
      <section className="sub-access">
        <h2 className="sub-access-title">An All Access subscription includes</h2>
        <div className="sub-access-grid">
          {ACCESS_CARDS.map(card => (
            <div key={card.title} className="sub-access-card">
              <h3 className="sub-access-card-title">{card.title}</h3>
              <p className="sub-access-card-desc">{card.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── COOKING ONLY SECTION ── */}
      <section className="sub-cooking">
        <div className="sub-cooking-logo">
          <img src={chefifyLogo} alt="Chefify" width={36} height={36} />
          <span>Chefify</span>
        </div>
        <h2 className="sub-cooking-title">Subscribe to Chefify Cooking only</h2>
        <p className="sub-cooking-desc">
          Enjoy thousands of delicious recipes for every taste, plus advice and inspiration daily.
        </p>

        <div className="sub-plan-options">
          <label className={`sub-plan-option ${plan === 'monthly' ? 'selected' : ''}`}>
            <input type="radio" name="plan" value="monthly"
              checked={plan === 'monthly'} onChange={() => setPlan('monthly')} />
            <span className="sub-radio-dot"/>
            $2/month <span className="sub-plan-note">(Billed every 4 weeks)</span>
          </label>
          <label className={`sub-plan-option ${plan === 'yearly' ? 'selected' : ''}`}>
            <input type="radio" name="plan" value="yearly"
              checked={plan === 'yearly'} onChange={() => setPlan('yearly')} />
            <span className="sub-radio-dot"/>
            $20/year <span className="sub-plan-note">(Billed one annually)</span>
          </label>
        </div>

        <button className="sub-cta-btn sub-cta-center">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>
          </svg>
          Subscribe Now
        </button>
        <p className="sub-cancel">Cancel or Pause anytime</p>
      </section>
    </div>
  )
}

export default Subscribe
