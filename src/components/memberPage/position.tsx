import React from 'react';
import classNames from 'classnames';
import Card from './card';

interface IMember {
  name: string;
  mail: string;
  website: string;
  expertise: string[];
}

interface IProps {
  title: string;
  members: IMember[];
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Position: React.FC<IProps> = ({ title, members }) => {
  const createCards = members.map((d) => (
    <Card
      title={title}
      name={d.name}
      mail={d.mail}
      website={d.website}
      expertise={d.expertise}
    />
  ));
  return (
    <div className={classNames('memberpage-position')}>
      <h3>{title}</h3>
      <div className={classNames('memberpage-position-cards-container')}>
        {createCards}
      </div>
    </div>
  );
};

export default Position;
