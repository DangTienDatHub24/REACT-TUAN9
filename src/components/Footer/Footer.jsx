import './Footer.css'
import chefifyLogo from '../../assets/3_Data/Lab_02/chefifywhite.png'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* About Us + Email */}
        <div className="footer-col footer-about">
          <h4>About Us</h4>
          <p>Welcome to our website, a wonderful place to explore and learn how to cook like a pro.</p>
          <div className="footer-email-row">
            <input type="email" placeholder="Enter your email" />
            <button>Send</button>
          </div>
        </div>

        {/* Learn More */}
        <div className="footer-col">
          <h4>Learn More</h4>
          <ul>
            <li><a href="#">Our Cooks</a></li>
            <li><a href="#">See Our Features</a></li>
            <li><a href="#">FAQ</a></li>
          </ul>
          <h4 style={{ marginTop: '24px' }}>Shop</h4>
          <ul>
            <li><a href="#">Gift Subscription</a></li>
          </ul>
        </div>

        {/* Recipes */}
        <div className="footer-col">
          <h4>Recipes</h4>
          <ul>
            <li><a href="#">What to Cook This Week</a></li>
            <li><a href="#">Pasta</a></li>
            <li><a href="#">Dinner</a></li>
            <li><a href="#">Healthy</a></li>
            <li><a href="#">Vegetarian</a></li>
            <li><a href="#">Vegan</a></li>
            <li><a href="#">Christmas</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="footer-bottom">
        <div className="footer-logo">
          <img src={chefifyLogo} alt="Chefify" width={24} height={24} />
          <span>Chefify</span>
        </div>
        <span className="footer-copy">2023 Chefify Company</span>
        <div className="footer-links">
          <a href="#">Terms of Service</a>
          <a href="#">Privacy Policy</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
