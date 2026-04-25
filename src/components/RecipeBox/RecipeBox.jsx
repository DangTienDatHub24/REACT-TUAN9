import { useState } from 'react'
import './RecipeBox.css'
import avatarImg from '../../assets/3_Data/Lab_02_b/avatar.png'

// Reuse food images already in the project
import img1 from '../../assets/3_Data/Lab_02_b/Italian-style tomato.png'
import img2 from '../../assets/3_Data/Lab_02_b/Vegetable and shrimp spaghetti.png'
import img3 from '../../assets/3_Data/Lab_02_b/Lotus delight salad.png'
import img4 from '../../assets/3_Data/Lab_02_b/Snack cakes.png'
import img5 from '../../assets/3_Data/Lab_02_b/Salad with cabbage.png'
import img6 from '../../assets/3_Data/Lab_02_b/Bean, shrimp, and potato salad.png'
import img7 from '../../assets/3_Data/Lab_02_b/Sunny-side up fried eggs.png'
import img8 from '../../assets/3_Data/Lab_02_b/Lotus delight salad_01.png'

const SAVED_RECIPES = [
  { id: 1, img: img1, title: 'Italian-style tomato salad',       time: '14 minutes' },
  { id: 2, img: img2, title: 'Vegetable and shrimp spaghetti',   time: '15 minutes' },
  { id: 3, img: img3, title: 'Lotus delight salad',              time: '20 minutes' },
  { id: 4, img: img4, title: 'Snack cakes',                      time: '21 minutes' },
  { id: 5, img: img5, title: 'Salad with cabbage and shrimp',    time: '32 minutes' },
  { id: 6, img: img6, title: 'Bean, shrimp, and potato salad',   time: '32 minutes' },
  { id: 7, img: img7, title: 'Sunny-side up fried eggs',         time: '32 minutes' },
  { id: 8, img: img8, title: 'Lotus delight salad',              time: '32 minutes' },
]

const TABS = ['Saved Recipes', 'Folders', 'Recipes by Emma']

function RecipeBox({ onNavigateHome }) {
  const [activeTab, setActiveTab] = useState(0)
  const [bookmarked, setBookmarked] = useState(new Set())
  const [currentPage, setCurrentPage] = useState(1)
  const totalPages = 11

  const toggleBookmark = (id) => {
    setBookmarked(prev => {
      const next = new Set(prev)
      next.has(id) ? next.delete(id) : next.add(id)
      return next
    })
  }

  const renderPagination = () => {
    const pages = []
    // Always show 1, 2, 3, 4 then ... then 10, 11
    const shown = [1, 2, 3, 4]
    pages.push(
      <button
        key="prev"
        className="rb-page-btn rb-page-arrow"
        onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
        disabled={currentPage === 1}
      >
        ‹
      </button>
    )
    shown.forEach(n => pages.push(
      <button
        key={n}
        className={`rb-page-btn ${currentPage === n ? 'rb-page-active' : ''}`}
        onClick={() => setCurrentPage(n)}
      >{n}</button>
    ))
    pages.push(<span key="dots" className="rb-page-dots">···</span>)
    ;[10, 11].forEach(n => pages.push(
      <button
        key={n}
        className={`rb-page-btn ${currentPage === n ? 'rb-page-active' : ''}`}
        onClick={() => setCurrentPage(n)}
      >{n}</button>
    ))
    pages.push(
      <button
        key="next"
        className="rb-page-btn rb-page-arrow"
        onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
        disabled={currentPage === totalPages}
      >
        ›
      </button>
    )
    return pages
  }

  return (
    <div className="rb-page">
      {/* Breadcrumb */}
      <nav className="rb-breadcrumb">
        <button className="rb-breadcrumb-home" onClick={onNavigateHome}>Home</button>
        <span className="rb-breadcrumb-sep">›</span>
        <span className="rb-breadcrumb-current">Your Recipe Box</span>
      </nav>

      {/* Profile Header */}
      <section className="rb-profile">
        <div className="rb-profile-left">
          <div className="rb-avatar-wrap">
            <img src={avatarImg} alt="Emma Gonzalez" className="rb-avatar" />
          </div>
        </div>
        <div className="rb-profile-info">
          <h1 className="rb-profile-name">Emma Gonzalez's Recipe Box</h1>
          <p className="rb-profile-bio">
            Emma Gonzalez is a deputy editor at Chefify, bringing her expertise as a former
            cooking editor at The Los Angeles Times. She is also an accomplished author,
            contributing to numerous cookbooks and food publications. Originally from East Los
            Angeles, Emma now resides in New York City, where she explores a wide range of
            culinary delights.
          </p>
          <div className="rb-profile-actions">
            <span className="rb-subscribers">6.5k Subscribes</span>
            <button className="rb-share-btn">
              Share
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/>
                <polyline points="16 6 12 2 8 6"/>
                <line x1="12" y1="2" x2="12" y2="15"/>
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* Tabs */}
      <div className="rb-tabs">
        {TABS.map((tab, i) => (
          <button
            key={tab}
            className={`rb-tab ${activeTab === i ? 'rb-tab-active' : ''}`}
            onClick={() => setActiveTab(i)}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="rb-tabs-underline" />

      {/* Recipe Grid */}
      <div className="rb-grid">
        {SAVED_RECIPES.map(recipe => (
          <div key={recipe.id} className="rb-card">
            <div className="rb-card-img-wrap">
              <img src={recipe.img} alt={recipe.title} className="rb-card-img" />
              <button
                className={`rb-card-bookmark ${bookmarked.has(recipe.id) ? 'rb-card-bookmark--saved' : ''}`}
                onClick={() => toggleBookmark(recipe.id)}
                aria-label="Bookmark"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill={bookmarked.has(recipe.id) ? '#E63E6D' : 'none'} stroke="#E63E6D" strokeWidth="2">
                  <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/>
                </svg>
              </button>
            </div>
            <div className="rb-card-body">
              <h3 className="rb-card-title">{recipe.title}</h3>
              <p className="rb-card-time">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#E63E6D" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
                </svg>
                {recipe.time}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="rb-pagination">
        {renderPagination()}
      </div>
    </div>
  )
}

export default RecipeBox
