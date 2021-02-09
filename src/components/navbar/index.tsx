import React from 'react';
import classNames from 'classnames';
import Title from './title';
import Links from './links';

const NavBar: React.FC = () => (
  <nav className={classNames('navbar-container')}>
    <Title />
    <Links />
  </nav>
);

export default NavBar;
