import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

const Links: React.FC = () => (
  <ul className={classNames('navbar-links')}>
    <Link to="/">
      <li>Home</li>
    </Link>
    <Link to="/work">
      <li>Our Works</li>
    </Link>
    <Link to="/advisor">
      <li>Advisor</li>
    </Link>
    <Link to="/member">
      <li>Members</li>
    </Link>
    <Link to="/contact">
      <li>Contact Us</li>
    </Link>
  </ul>
);

export default Links;
