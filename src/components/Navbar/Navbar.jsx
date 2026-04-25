import './Navbar.css'
import chefifyLogo from '../../assets/3_Data/Lab_02/chefify.png'
import avatarImg from '../../assets/3_Data/Lab_02/avatar.png'

function Navbar({ onLoginClick, user, onRecipeBoxClick, onLogoClick, onSearch, searchQuery, onSearchChange, onSubscribeClick }) {
  return (
    <header className="navbar">
      <div className="navbar-left">
        <button className="navbar-logo" onClick={onLogoClick}>
          <img src={chefifyLogo} alt="Chefify" width={32} height={32} />
          <span>Chefify</span>
        </button>
        <div className="navbar-search">
          <svg
            width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#999" strokeWidth="2"
            style={{ cursor: 'pointer', flexShrink: 0 }}
            onClick={() => searchQuery.trim() && onSearch(searchQuery)}
          >
            <circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/>
          </svg>
          <input
            type="text"
            placeholder="What would you like to cook?"
            value={searchQuery}
            onChange={e => onSearchChange(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && searchQuery.trim() && onSearch(searchQuery)}
          />
        </div>
      </div>

      <nav className="navbar-nav">
        <a href="#">What to cook</a>
        <a href="#">Recipes</a>
        <a href="#">Ingredients</a>
        <a href="#">Occasions</a>
        <a href="#">About Us</a>
      </nav>

      <div className="navbar-actions">
        {user ? (
          <div className="navbar-user">
            <button className="btn-recipe-box" onClick={onRecipeBoxClick}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#E63E6D" strokeWidth="2">
                <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/>
              </svg>
              Your Recipe Box
            </button>
            <img src={avatarImg} alt="Avatar" className="navbar-avatar" />
          </div>
        ) : (
          <>
            <button className="btn-login" onClick={onLoginClick}>Login</button>
            <button className="btn-subscribe" onClick={onSubscribeClick}>Subscribe</button>
          </>
        )}
      </div>
    </header>
  )
}

export default Navbar
