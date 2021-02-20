import React from 'react';
import classNames from 'classnames';

interface IProps {
  imgName: string;
  title: string;
  content: string;
}

const Domain: React.FC<IProps> = ({ imgName, title, content }) => (
  <div className={classNames('homepage-research-domain')} data-aos="fade-up">
    <img
      alt={imgName}
      src={`${process.env.PUBLIC_URL}/homePage/research/${imgName}.png`}
    />
    <h3>{title}</h3>
    <p>{content}</p>
  </div>
);

export default Domain;
