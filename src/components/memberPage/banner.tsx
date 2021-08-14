import React from 'react';
import classNames from 'classnames';

const Banner: React.FC = () => (
  <div className={classNames('memberpage-banner')}>
    <div className={classNames('memberpage-banner-title')}>
      NetDB
      <br /> Lab Members
    </div>
    <img
      className={classNames('memberpage-banner-img')}
      alt="NetDB Lab Members"
      src={`${process.env.PUBLIC_URL}/memberPage/bg.svg`}
    />
  </div>
);

export default Banner;
