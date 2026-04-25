import './Hero.css'
import heroImg from '../../assets/3_Data/Lab_01/Image 73.png'
import avatarImg from '../../assets/3_Data/Lab_02/avatar.png'

function Hero({ onRecipeClick }) {
  return (
    <section className="hero-section">
      <img src={heroImg} alt="Chef cooking" className="hero-bg" />
      <div className="hero-overlay" />

      {/* Recipe of the day card */}
      <div className="recipe-card" onClick={onRecipeClick} style={{ cursor: 'pointer' }}>
        <div className="recipe-tag">Recipe of the day</div>
        <h2 className="recipe-name">Salad Caprese</h2>
        <p className="recipe-desc">
          Classic Italian Salad Caprese: ripe tomatoes, fresh mozzarella, herbs, olive oil,
          and balsamic vinegar create a refreshing dish for lunch or appetizer.
        </p>
        <div className="recipe-bottom">
          <div className="recipe-author">
            <img src={avatarImg} alt="Author" className="recipe-author-avatar" />
            <span>Salad Caprese</span>
          </div>
          <button className="recipe-view-btn" onClick={e => { e.stopPropagation(); onRecipeClick() }}>
            View now
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}

export default Hero
