import React from 'react';

import Title from './title';
import Intro from './intro';
import Research from './research';
import Service from './service';
import Application from './application';

const HomePageContainer: React.FC = () => (
  <>
    <Intro />
    <Title text="Research Domain" />
    <Research />
    <Title text="Application ＆ Service" />
    <Service />
    <Application />
  </>
);

export default HomePageContainer;
