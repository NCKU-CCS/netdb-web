import React from 'react';
import classNames from 'classnames';
import Intro from './intro';
import Partner from './partner';
import Research from './research';
import Service from './service';
import Application from './application';

const HomePageContainer = () => (
  <>
    <Intro />
    <Partner />
    <Research />
    <div
      className={classNames('homepage-application-and-service-title')}
      data-aos="fade-up"
      data-aos-easing="ease-in"
      data-aos-duration="500"
      data-aos-once="true"
    >
      Application & Service
    </div>
    <Service />
    <Application />
  </>
);

export default HomePageContainer;
