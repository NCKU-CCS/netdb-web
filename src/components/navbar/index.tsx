import React from 'react';
import classNames from 'classnames';

import Links from './links';
import Burger from './burger';

const NavBar: React.FC = () => (
  <div className={classNames('navbar-container')}>
    <img
      className={classNames('navbar-img')}
      alt="NetDB Lab"
      src={`${process.env.PUBLIC_URL}/navbar/title.png`}
    />
    <Links />
    <Burger />
  </div>
);

export default NavBar;
