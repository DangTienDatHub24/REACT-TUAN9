import './RecipesWithVideos.css'
import img1 from '../../assets/3_Data/Lab_02_b/Salad with cabbage.png'
import img2 from '../../assets/3_Data/Lab_02_b/Bean, shrimp, and potato salad.png'
import img3 from '../../assets/3_Data/Lab_02_b/Sunny-side up fried eggs.png'
import img4 from '../../assets/3_Data/Lab_02_b/Lotus delight salad_01.png'

const videoRecipes = [
  { id: 1, img: img1, name: 'Salad with cabbage and shrimp', time: '32 minutes' },
  { id: 2, img: img2, name: 'Salad of cove beans, shrimp and potatoes', time: '20 minutes' },
  { id: 3, img: img3, name: 'Sunny-side up fried eggs', time: '15 minutes' },
  { id: 4, img: img4, name: 'Lotus delight salad', time: '20 minutes' },
]

function PlayIcon() {
  return (
    <div className="play-btn">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
        <path d="M8 5v14l11-7z"/>
      </svg>
    </div>
  )
}

function BookmarkIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#E63E6D" strokeWidth="2">
      <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/>
    </svg>
  )
}

function RecipesWithVideos({ onRecipeClick }) {
  return (
    <section className="videos-section">
      <div className="section-header">
        <h2 className="section-title">Recipes With Videos</h2>
        <p className="section-subtitle">Cooking Up Culinary Creations with Step-by-Step Videos</p>
      </div>

      <div className="videos-grid">
        {videoRecipes.map((r) => (
          <div key={r.id} className="video-item" onClick={onRecipeClick} style={{ cursor: 'pointer' }}>
            <div className="video-img-wrap">
              <img src={r.img} alt={r.name} className="video-img" />
              <PlayIcon />
              <button className="recipe-bookmark" aria-label="Bookmark">
                <BookmarkIcon />
              </button>
            </div>
            <div className="video-info">
              <h3 className="video-name">{r.name}</h3>
              <span className="video-time">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#E63E6D" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>
                </svg>
                {r.time}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default RecipesWithVideos
