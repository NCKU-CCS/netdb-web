import React from 'react';
import classNames from 'classnames';

const Banner: React.FC = () => (
  <div className={classNames('memberpage-banner')}>
    <h1>
      NetDB
      <br /> Lab Members
    </h1>
    <img
      alt="NetDB Lab Advisor"
      src={`${process.env.PUBLIC_URL}/memberPage/bg.svg`}
    />
  </div>
);

export default Banner;
