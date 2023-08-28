import React from 'react'
import './header.css'
import HeaderLogo from'../../assets/header-bg.svg'

const Header = () => {
  return (
    <>
      <div className="header container">
        <div className="header-content">
          <h1 className="header-title">Discover Istanbul's Hidden Gems</h1>
          <h2 className="header-subtitle">
            Its vibrant culture, delicious cuisine, and welcoming people make it
            a must-visit destination for any traveler seeking adventure, beauty,
            and inspiration.
          </h2>
          <button className="header-button">Read More</button>
        </div>
        <div className="header-bg">
            <img src={HeaderLogo} alt="header-logo" className="header-img" />
        </div>
      </div>
    </>
  );
}

export default Header