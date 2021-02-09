import React from 'react';
import classNames from 'classnames';
import Title from './title';
import Links from './links';
import Contact from './contact';

const Footer: React.FC = () => (
  <div className={classNames('footer-container')}>
    <Title />
    <Links />
    <Contact />
  </div>
);

export default Footer;
