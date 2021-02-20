import React from 'react';
import classNames from 'classnames';

interface IProps {
  title: string;
  name: string;
  mail: string;
  website: string;
  expertise: string[];
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Card: React.FC<IProps> = ({ title, name, mail, website, expertise }) => {
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
            alt="mail"
            src={`${process.env.PUBLIC_URL}/memberPage/mail.png`}
          />
        </a>
        <a href={website}>
          <img
            alt="website"
            src={`${process.env.PUBLIC_URL}/memberPage/github.png`}
          />
        </a>
        {createExpertise}
      </div>
    </div>
  );
};

export default Card;
