import React from 'react';
import classNames from 'classnames';
import NavBar from '../components/navbar';

interface IProps {
  children: React.ReactNode;
}

const GeneralLayout: React.FC<IProps> = ({ children }) => (
  <main className={classNames('general-layout')}>
    <NavBar />
    {children}
  </main>
);

export default GeneralLayout;
