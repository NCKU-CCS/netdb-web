import React, { useState, useEffect } from 'react';
import classNames from 'classnames';
import smoothscroll from 'smoothscroll-polyfill';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';
import LinearProgress from '@material-ui/core/LinearProgress';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

import Navbar from '../components/navbar';
import Footer from '../components/footer';

interface IProps {
  children: React.ReactNode;
}

const GeneralLayout: React.FC<IProps> = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isRendered, setIsRendered] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  const scrollToTop = () => {
    smoothscroll.polyfill();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    if (!isLoading) {
      setTimeout(() => setIsRendered(true), 1000);
    }
  }, [isLoading]);

  useEffect(() => {
    const onScroll = () => setScrollY(window.pageYOffset);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      {!isRendered && (
        <LinearProgress className={classNames('general-layout-progress')} />
      )}
      <main
        className={classNames('general-layout', { loading: !isRendered })}
        onLoad={() => setIsLoading(false)}
      >
        <Navbar />
        {children}
        <Zoom in={scrollY >= 50}>
          <Fab
            color="primary"
            style={{
              position: 'fixed',
              bottom: '30px',
              right: '30px',
              backgroundColor: '#59d9ac',
            }}
            onClick={() => scrollToTop()}
          >
            <KeyboardArrowUpIcon />
          </Fab>
        </Zoom>
        <Footer />
      </main>
    </>
  );
};

export default GeneralLayout;
