import React from 'react';
import classNames from 'classnames';

const Banner: React.FC = () => (
  <div className={classNames('workpage-banner')}>
    <h1>Our Works</h1>
    <img alt="Our Works" src={`${process.env.PUBLIC_URL}/workPage/bg.svg`} />
  </div>
);

export default Banner;
