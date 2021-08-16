import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

const Links: React.FC = () => (
  <div className={classNames('footer-links')}>
    <Link
      to="/"
      className={classNames(
        `${window.location.pathname === '/netdb-web/' ? 'selected' : ''}`,
      )}
    >
      Home
    </Link>
    <Link
      to="/work"
      className={classNames(
        `${window.location.pathname.includes('work') ? 'selected' : ''}`,
      )}
    >
      Our Works
    </Link>
    <Link
      to="/advisor"
      className={classNames(
        `${window.location.pathname.includes('advisor') ? 'selected' : ''}`,
      )}
    >
      Advisor
    </Link>
    <Link
      to="/member"
      className={classNames(
        `${window.location.pathname.includes('member') ? 'selected' : ''}`,
      )}
    >
      Members
    </Link>
    <Link
      to="/contact"
      className={classNames(
        `${window.location.pathname.includes('contact') ? 'selected' : ''}`,
      )}
    >
      Contact Us
    </Link>
  </div>
);

export default Links;
