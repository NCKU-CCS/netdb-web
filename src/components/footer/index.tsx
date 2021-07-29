import React from 'react';
import classNames from 'classnames';
import Title from './title';
import Links from './links';
import Contact from './contact';

const Footer: React.FC = () => (
  <div className={classNames('footer-container')}>
    <div className={classNames('footer-top-container')}>
      <Title />
      <Links />
    </div>
    <Contact />
  </div>
);

export default Footer;
