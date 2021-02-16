import React from 'react';
import classNames from 'classnames';

const Banner: React.FC = () => (
  <div className={classNames('advisorpage-banner')}>
    <h1>NetDB Lab Advisor</h1>
    <img
      alt="NetDB Lab Advisor"
      src={`${process.env.PUBLIC_URL}/advisorPage/bg.png`}
    />
  </div>
);

export default Banner;
