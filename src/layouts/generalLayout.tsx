import React, { useState, useEffect } from 'react';
import classNames from 'classnames';
import LinearProgress from '@material-ui/core/LinearProgress';

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
        <Footer />
      </main>
    </>
  );
};

export default GeneralLayout;
