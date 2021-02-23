import React from 'react';
import classNames from 'classnames';

interface ILink {
  github: string;
  linkedin: string;
  homepage: string;
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
        <a href={link.github}>
          <img
            className={classNames('memberpage-card-hover-img-github')}
            alt="github"
            src={`${process.env.PUBLIC_URL}/memberPage/github.png`}
          />
        </a>
        <a href={link.linkedin}>
          <img
            className={classNames('memberpage-card-hover-img-linkedin')}
            alt="linkedin"
            src={`${process.env.PUBLIC_URL}/memberPage/linkedin.png`}
          />
        </a>
        <a href={link.homepage}>
          <img
            className={classNames('memberpage-card-hover-img-homepage')}
            alt="homepage"
            src={`${process.env.PUBLIC_URL}/memberPage/homepage.png`}
          />
        </a>
        {createExpertise}
      </div>
    </div>
  );
};

export default Card;
