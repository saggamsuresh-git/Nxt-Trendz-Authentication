import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <nav className="small-nav-container">
    <div className="logo-logout-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
        alt="website logo"
        className="small-nav-website-logo"
      />
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png"
        alt="nav logout"
        className="small-nav-icon"
      />
    </div>
    <ul className="small-nav-list-items-container">
      <li>
        <Link to="/">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-icon.png"
            alt="nav home"
            className="small-nav-icon"
          />
        </Link>
      </li>
      <li>
        <Link to="/products">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-icon.png"
            alt="nav products"
            className="small-nav-icon"
          />
        </Link>
      </li>
      <li>
        <Link to="/cart">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-icon.png"
            alt="nav cart"
            className="small-nav-icon"
          />
        </Link>
      </li>
    </ul>
  </nav>
)

export default Header
