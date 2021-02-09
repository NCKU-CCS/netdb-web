import React from 'react';
import classNames from 'classnames';
import Intro from './intro';
import Footer from '../footer';

const HomePageContainer = () => (
  <div className={classNames('homepage-container')}>
    <Intro />
    <Footer />
  </div>
);

export default HomePageContainer;
