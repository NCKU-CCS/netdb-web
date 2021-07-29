import React from 'react';
import classNames from 'classnames';

const Intro: React.FC = () => (
  <div className={classNames('homepage-intro')}>
    <div
      className={classNames('homepage-intro-title-container')}
      data-aos="fade-right"
      data-aos-duration="1000"
    >
      <div className={classNames('homepage-intro-title')}>
        Delivering innovation from data
      </div>
      <div className={classNames('homepage-intro-subtitle')}>
        Liberate the value of data, Empower the trust of data and Leverage data
        science to facilitate society
      </div>
    </div>
    <img
      className={classNames('homepage-intro-img')}
      alt="intro"
      src={`${process.env.PUBLIC_URL}/homePage/intro/intro.png`}
      data-aos="fade-left"
      data-aos-duration="1000"
    />
  </div>
);

export default Intro;
