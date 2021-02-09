import React from 'react';
import classNames from 'classnames';

const Intro: React.FC = () => (
  <div className={classNames('homepage-intro')}>
    intro
    <img alt="intro" src={`${process.env.PUBLIC_URL}/homePage/intro.png`} />
  </div>
);

export default Intro;
