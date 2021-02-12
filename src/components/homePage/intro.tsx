import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import classNames from 'classnames';

const Intro: React.FC = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className={classNames('homepage-intro')}>
      <div
        className={classNames('homepage-intro-title-container')}
        data-aos="fade-right"
        data-aos-easing="ease-in"
      >
        <div className={classNames('homepage-intro-title')}>
          Delivering innovation from data
        </div>
        <div className={classNames('homepage-intro-subtitle')}>
          Liberate the value of data, Empower the trust of data and Leverage
          data science to facilitate society
        </div>
      </div>
      <img
        alt="intro"
        src={`${process.env.PUBLIC_URL}/homePage/intro/intro.png`}
        data-aos="fade-left"
        data-aos-easing="ease-in"
      />
    </div>
  );
};

export default Intro;
