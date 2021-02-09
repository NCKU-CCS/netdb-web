import React from 'react';
import classNames from 'classnames';

const Intro: React.FC = () => (
  <div className={classNames('homepage-intro')}>
    <div className={classNames('homepage-intro-title-container')}>
      <div className={classNames('homepage-intro-title')}>
        Delivering innovation from data
      </div>
      <div className={classNames('homepage-intro-subtitle')}>
        Liberate the value of data, Empower the trust of data and Leverage data
        science to facilitate society
      </div>
    </div>
    <img alt="intro" src={`${process.env.PUBLIC_URL}/homePage/intro.png`} />
  </div>
);

export default Intro;
