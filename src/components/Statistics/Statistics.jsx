import React from 'react'
import StatisticsBg from "../../assets/statistics-bg.svg"
import './Statistics.css'

const Statistics = () => {
  return (
    <>
      <div className="statistics container">
        <div className="statistics-header">
          <h3 className="statistics-header__title">About Us</h3>
          <h2 className="statistics-title">
            One of the most popular travel agencies in 2023
          </h2>
        </div>
        <div className="statistics-main">
          <div className="statistics-bg">
            <img src={StatisticsBg} alt="statistics-bg" />
          </div>
          <div className="statistics-content">
            <div className="statistics-boxes">
              <div className="statistics-box">
                <h2 className="statistics-number">10000+</h2>
                <h3 className="statistics-text">
                  tourists have already got to know Istanbul with us
                </h3>
              </div>
              <div className="statistics-box">
                <h2 className="statistics-number">10</h2>
                <h3 className="statistics-text">
                  years of experience in conducting tours in Istanbul
                </h3>
              </div>
              <div className="statistics-box">
                <h2 className="statistics-number">99%</h2>
                <h3 className="statistics-text">
                  of tourists gave excellent rating our agency
                </h3>
              </div>
              <div className="statistics-box">
                <h2 className="statistics-number">15+</h2>
                <h3 className="statistics-text">
                  languages in which excursions are conducted
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Statistics