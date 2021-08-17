import React, { useState } from 'react';
import classNames from 'classnames';
import Banner from './banner';
import Year from './year';
import Project from './project';
import projects from './projects.json';

const WorkPageContainer: React.FC = () => {
  const [year, setYear] = useState<number>(
    projects.sort((a, b) => b.year - a.year)[0].year,
  );

  const createProjects = projects
    .filter((d) => d.year === year)
    .map((d) => (
      <Project
        name={d.name}
        type={d.type}
        slogan={d.slogan}
        introduction={d.introduction}
        link={d.link}
        img={d.img}
        partners={d.partners}
      />
    ));

  return (
    <>
      <Banner />
      <Year year={year} setYear={setYear} />
      {createProjects}
      <div className={classNames('workpage-padding-bottom')} />
    </>
  );
};

export default WorkPageContainer;
