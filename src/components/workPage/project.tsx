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
  <div className={classNames('workpage-project')}>
    <div className={classNames('workpage-project-text')}>
      <div>
        <img alt="eye" />
        <div>
          {slogan}
          <div>
            {name}
            <img alt="fb" />
          </div>
        </div>
      </div>
      <p>{introduction}</p>
      <div>
        {partners.map((d) => (
          <img alt={d} />
        ))}
      </div>
    </div>
    <img alt={name} />
  </div>
);

export default Project;
