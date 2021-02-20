import React from 'react';
import classNames from 'classnames';
import Domain from './domain';

const Research: React.FC = () => (
  <div className={classNames('homepage-research')}>
    <div data-aos="fade-up">Research Domain</div>
    <div className={classNames('homepage-research-domain-container')}>
      <Domain
        imgName="data-science"
        title="Data Science"
        content="From data collection to data analytics, we are making an effort to build the complete data pipeline of knowledge discovery in the big data environment. We can innovate the new method and adopt it to the certain scenario through trial-and-error rapidly."
      />
      <Domain
        imgName="cloud-computing"
        title="Cloud Computing"
        content="We aim at building cross-domain cloud infrastructure and integrating different micro-services in the current agile development environment with high efficiency and high availability."
      />
      <Domain
        imgName="DLT"
        title="DLT"
        content="By exploring distributed ledger technology (DLT), our researches is approaching to find a way to stand with the data sovereignty while providing non-repudiation to the user in the decentralized digital world."
      />
      <Domain
        imgName="AIOT"
        title="AIOT"
        content="Our goal is to advance the evolution of life landscape by combining artificial intelligent and IOT. By leveraging real-time connectivity of IOT device,we develop edge computing available algorithm which can change your living behavior and toward a more smarter community."
      />
    </div>
  </div>
);

export default Research;
