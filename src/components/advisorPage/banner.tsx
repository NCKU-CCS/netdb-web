import React from 'react';
import classNames from 'classnames';

const Banner: React.FC = () => (
  <div className={classNames('advisorpage-banner')}>
    <div className={classNames('advisor-page-banner-title')}>
      NetDB Lab Advisor
    </div>
    <img
      className={classNames('advisorpage-banner-img')}
      alt="NetDB Lab Advisor"
      src={`${process.env.PUBLIC_URL}/advisorPage/bg.svg`}
    />
  </div>
);

export default Banner;
