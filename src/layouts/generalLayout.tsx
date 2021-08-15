import React, { useState } from 'react';
import classNames from 'classnames';
import LinearProgress from '@material-ui/core/LinearProgress';

import Navbar from '../components/navbar';
import Footer from '../components/footer';

interface IProps {
  children: React.ReactNode;
}

const GeneralLayout: React.FC<IProps> = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading && (
        <LinearProgress className={classNames('general-layout-progress')} />
      )}
      <main
        className={classNames('general-layout', { loading: isLoading })}
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
