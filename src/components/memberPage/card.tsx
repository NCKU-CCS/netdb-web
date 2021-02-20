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
const Card: React.FC<IProps> = ({ title, name, mail, website, expertise }) => (
  <div className={classNames('memberpage-card')}>
    <img
      alt={name}
      src={`${process.env.PUBLIC_URL}/memberPage/members/sample.jpg`}
    />
  </div>
);

export default Card;
