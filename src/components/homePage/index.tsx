import React from 'react';
import classNames from 'classnames';
import Intro from './intro';
import Partner from './partner';
import Research from './research';
import Service from './service';
import Application from './application';

const HomePageContainer: React.FC = () => (
  <>
    <Intro />
    <Partner />
    <Research />
    <div
      className={classNames('homepage-application-and-service-title')}
      data-aos="fade-up"
    >
      Application ＆ Service
    </div>
    <Service />
    <Application />
  </>
);

export default HomePageContainer;
