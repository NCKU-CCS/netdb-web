import React from 'react';
import classNames from 'classnames';
import NavBar from '../components/navbar';
import Footer from '../components/footer';

interface IProps {
  children: React.ReactNode;
}

const GeneralLayout: React.FC<IProps> = ({ children }) => (
  <main className={classNames('general-layout')}>
    <NavBar />
    {children}
    <Footer />
  </main>
);

export default GeneralLayout;
