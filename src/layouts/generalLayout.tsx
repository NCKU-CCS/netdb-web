import React from 'react';
import classNames from 'classnames';

interface IProps {
  children: React.ReactNode;
}

const GeneralLayout: React.FC<IProps> = ({ children }) => (
  <main className={classNames('general-layout')}>
    {children}
  </main>
);

export default GeneralLayout;