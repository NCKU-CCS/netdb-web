import React from 'react';
import classNames from 'classnames';

const Banner: React.FC = () => (
  <div className={classNames('workpage-banner')}>
    <div className={classNames('workpage-banner-title')}>Our Works</div>
    <img
      className={classNames('workpage-banner-img')}
      alt="Our Works"
      src={`${process.env.PUBLIC_URL}/workPage/bg.svg`}
    />
  </div>
);

export default Banner;
