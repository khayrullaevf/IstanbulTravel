
import React from 'react'
import './navbar.css'

export const Navbar = () => {
  return (
    <>
      <div className="navbar container">
        <h2 className="navbar-logo">Istanjourney</h2>
        <ul className="navbar-menu">
          <li className="navbar-menu__item">
            <a href="#" className="navbar-menu__link">
              Home
            </a>
          </li>
          <li className="navbar-menu__item">
            <a href="#" className="navbar-menu__link">
              About
            </a>
          </li>
          <li className="navbar-menu__item">
            <a href="#" className="navbar-menu__link">
              Programs
            </a>
          </li>
          <li className="navbar-menu__item">
            <a href="#" className="navbar-menu__link">
              Blog
            </a>
          </li>
          <li className="navbar-menu__item">
            <a href="#" className="navbar-menu__link">
              Gallery
            </a>
          </li>
        </ul>
        <button className="navbar-button">Book a Tour</button>
      </div>
    </>
  );
}
