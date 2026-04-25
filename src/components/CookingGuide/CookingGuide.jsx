import { useState } from 'react'
import './CookingGuide.css'

// Images
import heroImg   from '../../assets/3_Data/Lab_01/Image 73.png'
import step1Img  from '../../assets/3_Data/Lab_02_b/Italian-style tomato.png'
import step3Img  from '../../assets/3_Data/Lab_02_b/Lotus delight salad.png'
import step6Img  from '../../assets/3_Data/Lab_02_b/Vegetable and shrimp spaghetti.png'
import avatarImg from '../../assets/3_Data/Lab_02_b/avatar.png'

// Recently viewed
import rv1 from '../../assets/3_Data/Lab_02_b/Salad with cabbage.png'
import rv2 from '../../assets/3_Data/Lab_02_b/Bean, shrimp, and potato salad.png'
import rv3 from '../../assets/3_Data/Lab_02_b/Sunny-side up fried eggs.png'
import rv4 from '../../assets/3_Data/Lab_02_b/Lotus delight salad_01.png'

const INGREDIENTS = [
  'Yield: 4 generous servings',
  '2 pints ripe, well-rinsed strawberries',
  '1/2 cup sugar, or more to taste',
  '4 cups flour',
  '3 tablespoons sugar',
  '1/4 teaspoon salt',
  '5 teaspoons baking powder',
  '1/4 cups butter',
  '3 cups whipping cream',
  '¼ teaspoon vanilla extract',
]

const STEPS = [
  {
    n: 1, img: step1Img,
    text: 'Pick over and hull strawberries. Cut in half or slice, depending on size. Gently crush about a quarter of the berries with a fork to release their juices. Mix with remaining berries and the ½ cup of sugar, adding more sugar if necessary. Set aside, covered, for about half an hour to develop flavor.',
  },
  {
    n: 2, img: null,
    text: 'Preheat oven to 450 degrees.',
  },
  {
    n: 3, img: step3Img,
    text: 'Into a large mixing bowl, sift together flour, 3 tablespoons sugar, salt and baking powder. Add ¼ cup of softened butter, and rub into dry ingredients as for pastry. Add 1¼ cups cream, and mix to a soft dough. Knead the dough for one minute on a lightly floured pastry board, then roll it out to about ½-inch thickness. Using a 3-inch biscuit cutter, cut an even number of rounds – 2 rounds per serving.',
  },
  {
    n: 4, img: null,
    text: 'Use a little of the butter to grease a baking sheet. Place half the rounds on it. Melt remaining butter and brush a little on the rounds; place remaining rounds on top. Bake for 10 to 15 minutes, or until golden brown.',
  },
  {
    n: 5, img: null,
    text: 'Use a little of the butter to grease a baking sheet. Place half the rounds on it. Melt remaining butter and brush a little on the rounds; place remaining rounds on top. Bake for 10 to 15 minutes, or until golden brown.',
  },
  {
    n: 6, img: step6Img,
    text: 'Beat remaining cream until it thickens. Add vanilla. Beat again just until thick.',
  },
]

const COMMENTS = [
  {
    id: 1, name: 'Jimmy Will', time: '08:10 AM', online: true,
    text: 'Enim consectetur enim magna sit sit ullamco et dolore veniam nulla labore laboris anim eiusmod voluptate qui esse amet. Non cupidatat sunt duis occ',
    likes: 0, replies: [],
  },
  {
    id: 2, name: 'Alisa Grill', time: '08:10 AM', online: true,
    text: 'Culpa esse pariatur deserunt reprehenderit fugiat incididunt exercitation dolore id officia officia duis Lorem et elit do eu est tempor. Tempor consequat qui laborum do qui sit laboris tempor culpa sit deserunt reprehenderit...',
    likes: 0, replyCount: 12,
    images: [rv1, rv2],
    replies: [
      { id: 21, name: 'Chris Helson', time: '09:42 AM', text: 'Labore ea est enim esse officia anim consequat cillum deserunt pariatu...' },
    ],
  },
  {
    id: 3, name: 'Emma Gonzalez', time: '08:10 AM', online: false,
    text: 'Deserunt minim incididunt cillum nostrud do voluptate excepteur excepteur minim ex minim est laborum labore 😊 Mollit commodo in do dolor ut in mollit est',
    likes: 0, replies: [],
  },
]

const RECENTLY_VIEWED = [
  { id: 1, img: rv1, title: 'Salad with cabbage and shrimp', time: '32 minutes' },
  { id: 2, img: rv2, title: 'Salad of cove beans, shrimp and potatoes', time: '32 minutes' },
  { id: 3, img: rv3, title: 'Sunny-side up fried eggs', time: '32 minutes' },
  { id: 4, img: rv4, title: 'Lotus delight salad', time: '32 minutes' },
]

function StarRating({ n = 4 }) {
  return (
    <div className="cg-stars">
      {[1,2,3,4,5].map(i => (
        <svg key={i} width="14" height="14" viewBox="0 0 24 24"
          fill={i <= n ? '#F5A623' : '#e0e0e0'} stroke="none">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
        </svg>
      ))}
    </div>
  )
}

function CookingGuide({ onNavigateHome }) {
  const [note, setNote] = useState('')
  const [bookmarked, setBookmarked] = useState(false)
  const [rvBookmarks, setRvBookmarks] = useState(new Set())

  const toggleRv = (id) => setRvBookmarks(prev => {
    const s = new Set(prev); s.has(id) ? s.delete(id) : s.add(id); return s
  })

  return (
    <div className="cg-page">
      {/* ── BREADCRUMB ── */}
      <nav className="cg-breadcrumb">
        <button className="cg-bc-link" onClick={onNavigateHome}>Home</button>
        <span className="cg-bc-sep">›</span>
        <span className="cg-bc-current">Cooking guide</span>
      </nav>

      {/* ── MAIN TWO-COLUMN LAYOUT ── */}
      <div className="cg-layout">

        {/* LEFT PANEL */}
        <aside className="cg-left">
          <h1 className="cg-title">How to make a Strawberry Shortcake</h1>
          <p className="cg-desc">
            It seems like there may be a misunderstanding. If you're asking how a user
            can make a Strawberry Shortcake, the process would be identical to the
            recipe I shared earlier. It involves preparing the strawberries, making the
            shortcakes, preparing whipped cream, and finally assembling the shortcake.
          </p>

          {/* Author card */}
          <div className="cg-author-card">
            <div className="cg-author-top">
              <div className="cg-author-info">
                <img src={avatarImg} alt="Emma Gonzalez" className="cg-author-avatar"/>
                <span className="cg-author-name">Emma Gonzalez</span>
              </div>
              <button
                className={`cg-bookmark-btn ${bookmarked ? 'active' : ''}`}
                onClick={() => setBookmarked(!bookmarked)}
              >
                <svg width="16" height="16" viewBox="0 0 24 24"
                  fill={bookmarked ? '#E63E6D' : 'none'} stroke="#E63E6D" strokeWidth="2">
                  <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/>
                </svg>
              </button>
            </div>
            <div className="cg-meta-row">
              <div className="cg-meta-item">
                <span className="cg-meta-label">Time:</span>
                <span className="cg-meta-value">45 minutes</span>
              </div>
              <div className="cg-meta-item">
                <span className="cg-meta-label">Notes</span>
                <span className="cg-meta-value">352 community notes</span>
              </div>
              <div className="cg-meta-item">
                <span className="cg-meta-label">Rating:</span>
                <StarRating n={4}/>
              </div>
            </div>
          </div>

          {/* Ingredients */}
          <div className="cg-ingredients">
            <ul className="cg-ingredient-list">
              {INGREDIENTS.map((item, i) => (
                <li key={i} className="cg-ingredient-item">- {item}</li>
              ))}
            </ul>
            <button className="cg-grocery-btn">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>
              </svg>
              Add to Your Grocery List
            </button>
          </div>
        </aside>

        {/* RIGHT PANEL */}
        <section className="cg-right">
          {/* Hero image */}
          <div className="cg-hero-img-wrap">
            <img src={heroImg} alt="Strawberry Shortcake" className="cg-hero-img"/>
          </div>

          {/* Steps */}
          {STEPS.map(step => (
            <div key={step.n} className="cg-step">
              <h3 className="cg-step-title">Step {step.n}</h3>
              <p className="cg-step-text">{step.text}</p>
              {step.img && (
                <div className="cg-step-img-wrap">
                  <img src={step.img} alt={`Step ${step.n}`} className="cg-step-img"/>
                  <div className="cg-play-btn">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="#E63E6D">
                      <polygon points="5 3 19 12 5 21 5 3"/>
                    </svg>
                  </div>
                </div>
              )}
            </div>
          ))}
        </section>
      </div>

      {/* ── COOKING NOTES ── */}
      <section className="cg-notes-section">
        <h2 className="cg-notes-title">Cooking note</h2>
        <div className="cg-note-input-wrap">
          <textarea
            className="cg-note-textarea"
            placeholder="State your opinion about the article"
            value={note}
            onChange={e => setNote(e.target.value)}
          />
          <button className="cg-note-send">Send</button>
        </div>

        {/* Tabs */}
        <div className="cg-note-tabs">
          <button className="cg-note-tab active">All Notes (32)</button>
          <button className="cg-note-tab">Most Helpful (20)</button>
          <button className="cg-note-tab">Private (1)</button>
        </div>

        {/* Comment list */}
        <div className="cg-comments">
          {COMMENTS.map(c => (
            <div key={c.id} className="cg-comment">
              <div className="cg-comment-header">
                <div className="cg-comment-author">
                  <div className="cg-comment-avatar-wrap">
                    <img src={avatarImg} alt={c.name} className="cg-comment-avatar"/>
                    {c.online && <span className="cg-online-dot"/>}
                  </div>
                  <span className="cg-comment-name">{c.name}</span>
                </div>
                <span className="cg-comment-time">{c.time}</span>
              </div>
              <p className="cg-comment-text">{c.text}</p>
              {c.images && (
                <div className="cg-comment-imgs">
                  {c.images.map((img, i) => (
                    <img key={i} src={img} alt="" className="cg-comment-img"/>
                  ))}
                </div>
              )}
              <div className="cg-comment-actions">
                <button className="cg-like-btn">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#888" strokeWidth="2">
                    <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3z"/>
                    <path d="M7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"/>
                  </svg>
                </button>
                <button className="cg-reply-btn">
                  {c.replyCount ? (
                    <span style={{color:'#E63E6D'}}>Reply ({c.replyCount})</span>
                  ) : 'Reply'}
                </button>
              </div>

              {/* Nested replies */}
              {c.replies && c.replies.map(r => (
                <div key={r.id} className="cg-reply">
                  <div className="cg-comment-header">
                    <div className="cg-comment-author">
                      <img src={avatarImg} alt={r.name} className="cg-comment-avatar"/>
                      <span className="cg-comment-name">{r.name}</span>
                    </div>
                    <span className="cg-comment-time">{r.time}</span>
                  </div>
                  <p className="cg-comment-text">{r.text}</p>
                  <div className="cg-comment-actions">
                    <button className="cg-like-btn">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#888" strokeWidth="2">
                        <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3z"/>
                      </svg>
                    </button>
                    <button className="cg-reply-btn">Reply</button>
                  </div>
                </div>
              ))}
            </div>
          ))}
          <button className="cg-show-more">Show more discussion (47)</button>
        </div>
      </section>

      {/* ── RECENTLY VIEWED ── */}
      <section className="cg-recent">
        <h2 className="cg-recent-title">Your Recently Viewed</h2>
        <div className="cg-recent-grid">
          {RECENTLY_VIEWED.map(r => (
            <div key={r.id} className="cg-recent-card">
              <div className="cg-recent-img-wrap">
                <img src={r.img} alt={r.title} className="cg-recent-img"/>
                <button
                  className={`cg-recent-bookmark ${rvBookmarks.has(r.id) ? 'saved' : ''}`}
                  onClick={() => toggleRv(r.id)}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24"
                    fill={rvBookmarks.has(r.id) ? '#E63E6D' : 'none'} stroke="#E63E6D" strokeWidth="2">
                    <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/>
                  </svg>
                </button>
              </div>
              <h3 className="cg-recent-name">{r.title}</h3>
              <p className="cg-recent-time">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#E63E6D" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
                </svg>
                {r.time}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default CookingGuide
