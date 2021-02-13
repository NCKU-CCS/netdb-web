import React from 'react';
import classNames from 'classnames';

const Intro: React.FC = () => (
  <div className={classNames('homepage-intro')}>
    <div
      className={classNames('homepage-intro-title-container')}
      data-aos="fade-right"
      data-aos-easing="ease-in"
      data-aos-duration="1000"
      data-aos-once="true"
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
      alt="intro"
      src={`${process.env.PUBLIC_URL}/homePage/intro/intro.png`}
      data-aos="fade-left"
      data-aos-easing="ease-in"
      data-aos-duration="1000"
      data-aos-once="true"
    />
  </div>
);

export default Intro;
