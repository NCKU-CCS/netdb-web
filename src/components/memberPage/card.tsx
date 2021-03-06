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

  return (
    <div className={classNames('memberpage-card')}>
      <img
        alt={name}
        src={`${process.env.PUBLIC_URL}/memberPage/members/${name}.jpg`}
      />
      <div className={classNames('memberpage-card-footer')}>
        <h4>{name}</h4>
        <div>{title}</div>
      </div>
      <div className={classNames('memberpage-card-hover')}>
        <div className={classNames('memberpage-card-hover-icons-container')}>
          <a href={`mailto:${mail}`}>
            <img
              className={classNames('memberpage-card-hover-img-mail')}
              alt="mail"
              src={`${process.env.PUBLIC_URL}/memberPage/mail.png`}
            />
          </a>
          {link.github && (
            <a href={link.github}>
              <img
                alt="github"
                src={`${process.env.PUBLIC_URL}/memberPage/github.png`}
              />
            </a>
          )}
          {link.linkedin && (
            <a href={link.linkedin}>
              <img
                alt="linkedin"
                src={`${process.env.PUBLIC_URL}/memberPage/linkedin.png`}
              />
            </a>
          )}
          {link.homepage && (
            <a href={link.homepage}>
              <img
                alt="homepage"
                src={`${process.env.PUBLIC_URL}/memberPage/homepage.png`}
              />
            </a>
          )}
        </div>
        {createExpertise}
      </div>
    </div>
  );
};

export default Card;
