import React from 'react';
import classNames from 'classnames';

const Banner: React.FC = () => (
  <div className={classNames('advisorpage-banner')}>
    <h1>NetDB Lab Advisor</h1>
    <img
      alt="NetDB Lab Advisor"
      src={`${process.env.PUBLIC_URL}/advisorPage/bg.svg`}
    />
  </div>
);

export default Banner;
