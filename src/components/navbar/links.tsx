import React from 'react';
import classNames from 'classnames';
import NavLink from './link';

const Links: React.FC = () => (
  <div className={classNames('navbar-links')}>
    <NavLink path="/" name="Home" />
    <NavLink path="/work" name="Our Works" />
    <NavLink path="/advisor" name="Advisor" />
    <NavLink path="/member" name="Members" />
    <NavLink path="/contact" name="Contact Us" />
  </div>
);

export default Links;
