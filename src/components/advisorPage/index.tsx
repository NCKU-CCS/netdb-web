import React from 'react';
import Banner from './banner';
import About from './about';
import Research from './research';
import Education from './education';
import Patents from './patents';

const AdvisorPageContainer: React.FC = () => (
  <>
    <Banner />
    <About />
    <Research />
    <Education />
    <Patents />
  </>
);

export default AdvisorPageContainer;
