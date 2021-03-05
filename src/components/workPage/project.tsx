/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import classNames from 'classnames';

interface IProps {
  name: string;
  type: string;
  slogan: string;
  introduction: string;
  link: string;
  img: string;
  partners: string[];
}

const Project: React.FC<IProps> = ({
  name,
  type,
  slogan,
  introduction,
  link,
  img,
  partners,
}) => (
  <div className={classNames('workpage-project-container')}>
    <h4>Project on {type}</h4>
    <div className={classNames('workpage-project')}>
      <div className={classNames('workpage-project-text')}>
        <div className={classNames('workpage-project-text-header')}>
          <img alt="eye" src={`${process.env.PUBLIC_URL}/workPage/eye.svg`} />
          <div className={classNames('workpage-project-text-header-right')}>
            <div
              className={classNames(
                'workpage-project-text-header-right-slogan',
              )}
            >
              {slogan}
            </div>
            <div
              className={classNames('workpage-project-text-header-right-name')}
            >
              {name}
              <a href={link}>
                <img
                  alt="fb"
                  src={`${process.env.PUBLIC_URL}/workPage/website.png`}
                />
              </a>
            </div>
          </div>
        </div>
        <p>{introduction}</p>
        <div className={classNames('workpage-project-text-footer')}>
          {partners.map((d) => (
            <img
              alt={d}
              src={`${process.env.PUBLIC_URL}/workPage/台南市政府.jpg`}
            />
          ))}
        </div>
      </div>
      <img
        alt={img}
        src={`${process.env.PUBLIC_URL}/workPage/taiwan-stat.png`}
      />
    </div>
  </div>
);

export default Project;
