import React from 'react';
import classNames from 'classnames';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

interface IProps {
  children: React.ReactNode;
}

const GeneralLayout: React.FC<IProps> = ({ children }) => (
  <main className={classNames('general-layout')}>
    <Navbar />
    {children}
    <Footer />
  </main>
);

export default GeneralLayout;
