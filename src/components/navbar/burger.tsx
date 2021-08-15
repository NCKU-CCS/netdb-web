import React, { useState } from 'react';
import classNames from 'classnames';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';

const Burger: React.FC = () => {
  const [isDrawerShown, setIsDrawerShown] = useState(false);

  const onClickLink = (url: string) => {
    window.location.replace(`${process.env.PUBLIC_URL}${url}`);
  };

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
          onClick={() => onClickLink('/')}
        >
          Home
        </Button>
        <Button
          className={classNames(
            'navbar-burger-link-btn',
            `${window.location.pathname.includes('work') ? 'selected' : ''}`,
          )}
          size="large"
          onClick={() => onClickLink('/work')}
        >
          Work
        </Button>
        <Button
          className={classNames(
            'navbar-burger-link-btn',
            `${window.location.pathname.includes('advisor') ? 'selected' : ''}`,
          )}
          size="large"
          onClick={() => onClickLink('/advisor')}
        >
          Advisor
        </Button>
        <Button
          className={classNames(
            'navbar-burger-link-btn',
            `${window.location.pathname.includes('member') ? 'selected' : ''}`,
          )}
          size="large"
          onClick={() => onClickLink('/member')}
        >
          Member
        </Button>
        <Button
          className={classNames(
            'navbar-burger-link-btn',
            `${window.location.pathname.includes('contact') ? 'selected' : ''}`,
          )}
          size="large"
          onClick={() => onClickLink('/contact')}
        >
          Contact
        </Button>
      </SwipeableDrawer>
    </>
  );
};

export default Burger;
