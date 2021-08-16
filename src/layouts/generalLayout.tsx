import React, { useState, useEffect } from 'react';
import classNames from 'classnames';
import Fab from '@material-ui/core/Fab';
import LinearProgress from '@material-ui/core/LinearProgress';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';

import Navbar from '../components/navbar';
import Footer from '../components/footer';

interface IProps {
  children: React.ReactNode;
}

const GeneralLayout: React.FC<IProps> = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isRendered, setIsRendered] = useState(false);

  useEffect(() => {
    if (!isLoading) {
      setTimeout(() => setIsRendered(true), 1000);
    }
  }, [isLoading]);

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
        <Fab
          color="primary"
          style={{
            position: 'fixed',
            bottom: '30px',
            right: '30px',
            backgroundColor: '#59d9ac',
          }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <ArrowDropUpIcon />
        </Fab>
        <Footer />
      </main>
    </>
  );
};

export default GeneralLayout;
