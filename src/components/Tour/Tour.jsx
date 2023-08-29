import React from 'react'
import './Tour.css'
import Prev from '../../assets/prev.svg';
import Next from "../../assets/next.svg";
import TourBg from "../../assets/tour-bg.svg";

const Tour = () => {
  return (
    <>
      <div className="tour container">
        <div className="tour-header">
          <h2 className="tour-title">The most popular tours for everyone</h2>
          <h3 className="tour-subtitle">
            We are dedicated to curating exceptional travel experiences that
            allow you to discover the true essence of this captivating city.
            With our carefully crafted selection of popular tours, you can
            immerse yourself in the vibrant culture, explore historical marvels,
            and create unforgettable memories.
          </h3>
        </div>
        <div className="tour-main">
          <img src={Prev} alt="prev" className="tour-prev" />
          <div className="tour-content">
            <div className="tour-info">
              <h2 className="tour-info__title">Historical Tour</h2>
              <h3 className="tour-description">
                A tour of Istanbul can take you through the city's magnificent
                landmarks, such as the Blue Mosque, and the Topkapi Palace,
                which provide a glimpse into Istanbul's grandeur and history.
                You can also explore Istanbul's diverse neighborhoods, each with
                its own character and charm, from the bohemian Beyoglu to the
                historic Sultanahmet.
              </h3>
              <button className="read-more">Read More</button>
            </div>
            <div className="tour-bg">
                <img src={TourBg} alt="tour-bg" className='tour-bg__img' />
            </div>
          </div>

          <img src={Next} alt="next" className="tour-next" />
        </div>
      </div>
    </>
  );
}

export default Tour