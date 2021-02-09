import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

interface IProps {
  path: string;
  name: string;
}

const FooterLink: React.FC<IProps> = ({ path, name }) => (
  <Link
    to={path}
    className={classNames(
      `${window.location.pathname === path ? 'selected' : ''}`,
    )}
  >
    {name}
  </Link>
);

export default FooterLink;
