import './SummerRecipes.css'
import img1 from '../../assets/3_Data/Lab_02_b/Italian-style tomato.png'
import img2 from '../../assets/3_Data/Lab_02_b/Vegetable and shrimp spaghetti.png'
import img3 from '../../assets/3_Data/Lab_02_b/Lotus delight salad.png'
import img4 from '../../assets/3_Data/Lab_02_b/Snack cakes.png'

const recipes = [
  { id: 1, img: img1, name: 'Italian-style tomato salad', time: '35 minutes' },
  { id: 2, img: img2, name: 'Spaghetti with vegetables and shrimp', time: '15 minutes' },
  { id: 3, img: img3, name: 'Lotus delight salad', time: '20 minutes' },
  { id: 4, img: img4, name: 'Snack cakes', time: '21 minutes' },
]

function BookmarkIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#E63E6D" strokeWidth="2">
      <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/>
    </svg>
  )
}

function SummerRecipes({ onRecipeClick }) {
  return (
    <section className="summer-section">
      <div className="section-header">
        <h2 className="section-title">This Summer Recipes</h2>
        <p className="section-subtitle">We have all your Independence Day sweets covered.</p>
      </div>

      <div className="recipes-grid">
        {recipes.map((r) => (
          <div key={r.id} className="recipe-item" onClick={onRecipeClick} style={{ cursor: 'pointer' }}>
            <div className="recipe-item-img-wrap">
              <img src={r.img} alt={r.name} className="recipe-item-img" />
              <button className="recipe-bookmark" aria-label="Bookmark">
                <BookmarkIcon />
              </button>
            </div>
            <div className="recipe-item-info">
              <h3 className="recipe-item-name">{r.name}</h3>
              <span className="recipe-item-time">
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

export default SummerRecipes
