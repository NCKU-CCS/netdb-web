import React, { useState } from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';

const Burger: React.FC = () => {
  const [isDrawerShown, setIsDrawerShown] = useState(false);

  return (
    <>
      <IconButton
        className={classNames('navbar-burger')}
        size="medium"
        onClick={() => setIsDrawerShown(true)}
      >
        <MenuIcon />
      </IconButton>
      <SwipeableDrawer
        anchor="top"
        open={isDrawerShown}
        onOpen={() => setIsDrawerShown(true)}
        onClose={() => setIsDrawerShown(false)}
      >
        <Button onClick={() => setIsDrawerShown(false)}>
          <ExpandLessIcon />
        </Button>
        <Button
          className={classNames(
            'navbar-burger-link-btn',
            `${window.location.pathname === '/netdb-web/' ? 'selected' : ''}`,
          )}
          size="large"
        >
          <Link to="/">Home</Link>
        </Button>
        <Button
          className={classNames(
            'navbar-burger-link-btn',
            `${window.location.pathname.includes('work') ? 'selected' : ''}`,
          )}
          size="large"
        >
          <Link to="/work">Work</Link>
        </Button>
        <Button
          className={classNames(
            'navbar-burger-link-btn',
            `${window.location.pathname.includes('advisor') ? 'selected' : ''}`,
          )}
          size="large"
        >
          <Link to="/advisor">Advisor</Link>
        </Button>
        <Button
          className={classNames(
            'navbar-burger-link-btn',
            `${window.location.pathname.includes('member') ? 'selected' : ''}`,
          )}
          size="large"
        >
          <Link to="/member">Member</Link>
        </Button>
        <Button
          className={classNames(
            'navbar-burger-link-btn',
            `${window.location.pathname.includes('contact') ? 'selected' : ''}`,
          )}
          size="large"
        >
          <Link to="/contact">Contact</Link>
        </Button>
      </SwipeableDrawer>
    </>
  );
};

export default Burger;
