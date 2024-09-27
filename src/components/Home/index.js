import {Link} from 'react-router-dom'
import Header from '../Header'

import './index.css'

const Home = () => (
  <div className="bg-container">
    <nav className="nav-bar-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
        alt="website logo"
        className="website-logo"
      />
      <div className="large-nav-container">
        <ul className="list-items-container">
          <li>
            <Link className="link-item" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="link-item" to="/products">
              Products
            </Link>
          </li>
          <li>
            <Link className="link-item" to="/cart">
              Cart
            </Link>
          </li>
          <button className="logout-btn" type="button">
            Logout
          </button>
        </ul>
      </div>
    </nav>

    <Header />
    <div className="home-container">
      <div className="text-container">
        <h1 className="heading">Clothes That Get YOU Noticed</h1>
        <p className="text-content">
          Fashion is part of the daily air and it does not quite help that it
          changes all the time. Clothes have always been a marker of the era and
          we are in a revolution. Your fashion makes you been seen and heard
          that way you are. So, celebrate the seasons new and exciting fashion
          in your own way.
        </p>
        <button className="shop-btn" type="button">
          Shop Now
        </button>
      </div>
      {/* <h1 className="small-screen-heading md-none">
        Clothes That Get YOU Noticed
      </h1> */}
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
        alt="clothes that get you noticed"
        className="home-page-image"
      />
    </div>
  </div>
)

export default Home
