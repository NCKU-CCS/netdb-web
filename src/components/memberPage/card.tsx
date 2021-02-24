import React from 'react';
import classNames from 'classnames';

interface ILink {
  github: string | null;
  linkedin: string | null;
  homepage: string | null;
}

interface IProps {
  title: string;
  name: string;
  mail: string;
  link: ILink;
  expertise: string[];
}

const Card: React.FC<IProps> = ({ title, name, mail, link, expertise }) => {
  const createExpertise = expertise.map((d) => <div>{d}</div>);

  const createLinks = Object.values(link)
    .filter((el) => el)
    .map((el, i) => (
      <a href={el}>
        <img
          className={classNames(`memberpage-card-hover-img--${i}`)}
          alt={Object.keys(link)[i]}
          src={`${process.env.PUBLIC_URL}/memberPage/${
            Object.keys(link)[i]
          }.png`}
        />
      </a>
    ));

  return (
    <div className={classNames('memberpage-card')}>
      <img
        alt={name}
        src={`${process.env.PUBLIC_URL}/memberPage/members/sample.jpg`}
      />
      <div className={classNames('memberpage-card-footer')}>
        <h4>{name}</h4>
        <div>{title}</div>
      </div>
      <div className={classNames('memberpage-card-hover')}>
        <a href={`mailto:${mail}`}>
          <img
            className={classNames('memberpage-card-hover-img-mail')}
            alt="mail"
            src={`${process.env.PUBLIC_URL}/memberPage/mail.png`}
          />
        </a>
        {createLinks}
        {createExpertise}
      </div>
    </div>
  );
};

export default Card;
