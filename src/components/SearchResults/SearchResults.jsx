import { useState, useMemo } from 'react'
import './SearchResults.css'
import { ALL_RECIPES, SUGGESTION_TAGS, RECIPE_TYPES } from '../../data/recipes'

// Map img keys to actual imports
import img_italian  from '../../assets/3_Data/Lab_02_b/Italian-style tomato.png'
import img_spaghetti from '../../assets/3_Data/Lab_02_b/Vegetable and shrimp spaghetti.png'
import img_lotus    from '../../assets/3_Data/Lab_02_b/Lotus delight salad.png'
import img_snack    from '../../assets/3_Data/Lab_02_b/Snack cakes.png'
import img_cabbage  from '../../assets/3_Data/Lab_02_b/Salad with cabbage.png'
import img_bean     from '../../assets/3_Data/Lab_02_b/Bean, shrimp, and potato salad.png'
import img_eggs     from '../../assets/3_Data/Lab_02_b/Sunny-side up fried eggs.png'
import img_lotus2   from '../../assets/3_Data/Lab_02_b/Lotus delight salad_01.png'

const IMG_MAP = {
  italian: img_italian, spaghetti: img_spaghetti, lotus: img_lotus,
  snack: img_snack, cabbage: img_cabbage, bean: img_bean,
  eggs: img_eggs, lotus2: img_lotus2,
}

function StarRating({ rating }) {
  return (
    <div className="sr-stars">
      {[1,2,3,4,5].map(n => (
        <svg key={n} width="14" height="14" viewBox="0 0 24 24"
          fill={n <= rating ? '#F5A623' : '#e0e0e0'} stroke="none">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
        </svg>
      ))}
    </div>
  )
}

function EmptyState({ query, onSuggestionClick }) {
  return (
    <div className="sr-empty">
      <h2 className="sr-empty-title">
        Sorry, no results were found for &ldquo;{query}&rdquo;
      </h2>
      {/* Inline SVG illustration */}
      <svg className="sr-empty-icon" viewBox="0 0 180 160" fill="none">
        <rect x="30" y="70" width="90" height="70" rx="8" fill="#fce8f0" stroke="#E63E6D" strokeWidth="2"/>
        <rect x="30" y="70" width="90" height="18" rx="8" fill="#E63E6D"/>
        <rect x="40" y="95" width="70" height="8" rx="4" fill="#f5b8cc"/>
        <rect x="40" y="110" width="50" height="8" rx="4" fill="#f5b8cc"/>
        <circle cx="130" cy="55" r="28" fill="#fff" stroke="#E63E6D" strokeWidth="2.5"/>
        <circle cx="130" cy="55" r="18" fill="#fce8f0"/>
        <line x1="122" y1="47" x2="138" y2="63" stroke="#E63E6D" strokeWidth="2.5" strokeLinecap="round"/>
        <line x1="138" y1="47" x2="122" y2="63" stroke="#E63E6D" strokeWidth="2.5" strokeLinecap="round"/>
        <line x1="151" y1="74" x2="162" y2="85" stroke="#E63E6D" strokeWidth="3" strokeLinecap="round"/>
      </svg>
      <p className="sr-empty-sub">We have all your Independence Day sweets covered.</p>
      <div className="sr-suggestion-tags">
        {SUGGESTION_TAGS.map(tag => (
          <button key={tag} className="sr-tag" onClick={() => onSuggestionClick(tag)}>
            {tag}
          </button>
        ))}
      </div>
    </div>
  )
}

function SearchResults({ query, onSearch }) {
  const [selectedTypes, setSelectedTypes] = useState([])
  const [timeRange, setTimeRange] = useState([0, 120])
  const [selectedRating, setSelectedRating] = useState(null)
  const [bookmarked, setBookmarked] = useState(new Set())
  const [sortOrder, setSortOrder] = useState('A-Z')

  const toggleType = (type) =>
    setSelectedTypes(prev =>
      prev.includes(type) ? prev.filter(t => t !== type) : [...prev, type]
    )

  const toggleBookmark = (id) => {
    setBookmarked(prev => { const s = new Set(prev); s.has(id) ? s.delete(id) : s.add(id); return s })
  }

  // Filter + sort results
  const results = useMemo(() => {
    const q = query.toLowerCase().trim()
    let filtered = ALL_RECIPES.filter(r => {
      const matchQuery = !q ||
        r.title.toLowerCase().includes(q) ||
        r.tags.some(t => t.includes(q))
      const matchType = selectedTypes.length === 0 || selectedTypes.includes(r.type)
      const matchTime = r.time >= timeRange[0] && r.time <= timeRange[1]
      const matchRating = selectedRating === null || r.rating >= selectedRating
      return matchQuery && matchType && matchTime && matchRating
    })
    if (sortOrder === 'A-Z') filtered = [...filtered].sort((a,b) => a.title.localeCompare(b.title))
    if (sortOrder === 'Z-A') filtered = [...filtered].sort((a,b) => b.title.localeCompare(a.title))
    if (sortOrder === 'Quick')  filtered = [...filtered].sort((a,b) => a.time - b.time)
    if (sortOrder === 'Rating') filtered = [...filtered].sort((a,b) => b.rating - a.rating)
    return filtered
  }, [query, selectedTypes, timeRange, selectedRating, sortOrder])

  const handleApply = () => {
    // Filters are applied reactively, this just provides visual feedback
  }

  const handleRangeMin = (e) => setTimeRange([Number(e.target.value), timeRange[1]])
  const handleRangeMax = (e) => setTimeRange([timeRange[0], Number(e.target.value)])

  return (
    <div className="sr-page">
      {/* ── LEFT FILTER PANEL ── */}
      <aside className="sr-sidebar">
        <h3 className="sr-filter-title">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="4" y1="6" x2="20" y2="6"/><line x1="8" y1="12" x2="16" y2="12"/>
            <line x1="11" y1="18" x2="13" y2="18"/>
          </svg>
          FILTERS
        </h3>

        {/* Type */}
        <div className="sr-filter-group">
          <div className="sr-filter-group-header">
            <span>Type</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#E63E6D" strokeWidth="2.5">
              <polyline points="18 15 12 9 6 15"/>
            </svg>
          </div>
          <div className="sr-type-grid">
            {RECIPE_TYPES.map(type => (
              <label key={type} className="sr-checkbox-label">
                <input
                  type="checkbox"
                  checked={selectedTypes.includes(type)}
                  onChange={() => toggleType(type)}
                  className="sr-checkbox"
                />
                <span className={`sr-checkbox-custom ${selectedTypes.includes(type) ? 'checked' : ''}`}/>
                {type}
              </label>
            ))}
          </div>
        </div>

        {/* Time range */}
        <div className="sr-filter-group">
          <div className="sr-filter-group-header">
            <span>Time</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#E63E6D" strokeWidth="2.5">
              <polyline points="18 15 12 9 6 15"/>
            </svg>
          </div>
          <div className="sr-time-labels">
            <span>{timeRange[0]} minutes</span>
            <span>{timeRange[1]} minutes</span>
          </div>
          <div className="sr-range-wrap">
            <input type="range" min="0" max="120" value={timeRange[0]}
              onChange={handleRangeMin} className="sr-range sr-range-min"/>
            <input type="range" min="0" max="120" value={timeRange[1]}
              onChange={handleRangeMax} className="sr-range sr-range-max"/>
            <div className="sr-range-track">
              <div className="sr-range-fill" style={{
                left: `${(timeRange[0]/120)*100}%`,
                width: `${((timeRange[1]-timeRange[0])/120)*100}%`
              }}/>
            </div>
          </div>
        </div>

        {/* Rating */}
        <div className="sr-filter-group">
          <div className="sr-filter-group-header">
            <span>Rating</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#E63E6D" strokeWidth="2.5">
              <polyline points="18 15 12 9 6 15"/>
            </svg>
          </div>
          {[5,4,3,2,1].map(r => (
            <label key={r} className="sr-rating-label">
              <input type="checkbox"
                checked={selectedRating === r}
                onChange={() => setSelectedRating(selectedRating === r ? null : r)}
                className="sr-checkbox"
              />
              <span className={`sr-checkbox-custom ${selectedRating === r ? 'checked' : ''}`}/>
              <StarRating rating={r}/>
            </label>
          ))}
        </div>

        <button className="sr-apply-btn" onClick={handleApply}>Apply</button>
      </aside>

      {/* ── MAIN CONTENT ── */}
      <main className="sr-main">
        {results.length > 0 ? (
          <>
            {/* Result header: big title + sort */}
            <div className="sr-result-header">
              <h1 className="sr-result-title">
                {query} <span className="sr-result-count-badge">({results.length})</span>
              </h1>
              <div className="sr-sort-wrap">
                <select
                  className="sr-sort-select"
                  value={sortOrder}
                  onChange={e => setSortOrder(e.target.value)}
                >
                  <option value="A-Z">A-Z</option>
                  <option value="Z-A">Z-A</option>
                  <option value="Quick">Quickest</option>
                  <option value="Rating">Top Rated</option>
                </select>
              </div>
            </div>

            <div className="sr-grid">
              {results.map(recipe => (
                <div key={recipe.id} className="sr-card">
                  <div className="sr-card-img-wrap">
                    <img src={IMG_MAP[recipe.img]} alt={recipe.title} className="sr-card-img"/>
                    <button
                      className={`sr-card-bookmark ${bookmarked.has(recipe.id) ? 'saved' : ''}`}
                      onClick={() => toggleBookmark(recipe.id)}
                    >
                      <svg width="15" height="15" viewBox="0 0 24 24"
                        fill={bookmarked.has(recipe.id) ? '#E63E6D' : 'none'}
                        stroke="#E63E6D" strokeWidth="2">
                        <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/>
                      </svg>
                    </button>
                  </div>
                  <div className="sr-card-body">
                    <h3 className="sr-card-title">{recipe.title}</h3>
                    <span className="sr-card-time">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#E63E6D" strokeWidth="2">
                        <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
                      </svg>
                      {recipe.time} minutes
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : (
          <EmptyState query={query} onSuggestionClick={onSearch} />
        )}
      </main>
    </div>
  )
}

export default SearchResults
