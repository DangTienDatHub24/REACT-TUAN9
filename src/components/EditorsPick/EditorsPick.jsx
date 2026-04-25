import './EditorsPick.css'
import img1 from '../../assets/3_Data/Lab_01/Image 72.png'
import img2 from '../../assets/3_Data/Lab_01/Image 93.png'
import img3 from '../../assets/3_Data/Lab_04/dish.png'
import img4 from '../../assets/3_Data/Lab_02_b/Bean, shrimp, and potato salad.png'
import avatar1 from '../../assets/3_Data/Lab_05/Avatar (1).png'
import avatar2 from '../../assets/3_Data/Lab_05/Avatar (2).png'
import avatar3 from '../../assets/3_Data/Lab_05/Avatar (3).png'
import avatar4 from '../../assets/3_Data/Lab_05/Avatar (4).png'

const picks = [
  {
    id: 1, img: img1,
    name: 'Stuffed sticky rice ball', time: '34 minutes',
    author: 'Jennifer King', avatar: avatar1,
    desc: 'Stuffed sticky rice balls: A delightful Asian treat with chewy, glutinous rice and a flavorful surprise filling...',
  },
  {
    id: 2, img: img2,
    name: 'Strawberry smoothie', time: '40 minutes',
    author: 'Matthew Martinez', avatar: avatar2,
    desc: 'Savor the refreshing delight of a strawberry smoothie. Made with ripe strawberries, this creamy blend offers...',
  },
  {
    id: 3, img: img3,
    name: 'Latte Art', time: '19 minutes',
    author: 'Sarah Hill', avatar: avatar3,
    desc: 'Latte art is the skillful craft of creating captivating designs on the surface of a latte...',
  },
  {
    id: 4, img: img4,
    name: 'Butter fried noodles', time: '16 minutes',
    author: 'Julia Lopez', avatar: avatar4,
    desc: 'Butter fried noodles: Savory noodles cooked in butter for a delicious and satisfying meal...',
  },
]

function BookmarkIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#E63E6D" strokeWidth="2">
      <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
    </svg>
  )
}

function EditorsPick({ onRecipeClick }) {
  return (
    <section className="editors-section">
      <div className="section-header">
        <h2 className="section-title">Editor&apos;s pick</h2>
        <p className="section-subtitle">Curated Culinary Delights: Handpicked Favorites by Our Expert Editors!</p>
      </div>

      <div className="editors-grid">
        {picks.map((p) => (
          <div key={p.id} className="editors-card" onClick={onRecipeClick} style={{ cursor: 'pointer' }}>
            <div className="editors-img-wrap">
              <img src={p.img} alt={p.name} className="editors-img" />
            </div>
            <div className="editors-info">
              <div className="editors-top">
                <div>
                  <p className="editors-time">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#E63E6D" strokeWidth="2">
                      <circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" />
                    </svg>
                    {p.time}
                  </p>
                  <h3 className="editors-name">{p.name}</h3>
                </div>
                <button className="editors-bookmark" aria-label="Bookmark">
                  <BookmarkIcon />
                </button>
              </div>
              <div className="editors-author">
                <img src={p.avatar} alt={p.author} className="editors-avatar" />
                <span className="editors-author-name">{p.author}</span>
              </div>
              <p className="editors-desc">{p.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default EditorsPick
