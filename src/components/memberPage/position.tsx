import React from 'react';
import classNames from 'classnames';
import Card from './card';

interface ILink {
  github: string | null;
  linkedin: string | null;
  homepage: string | null;
}

interface IMember {
  name: string;
  img: string;
  mail: string;
  link: ILink;
  expertise: string[];
}

interface IProps {
  title: string;
  members: IMember[];
}

const Position: React.FC<IProps> = ({ title, members }) => {
  const createCards = members.map((d) => (
    <Card
      title={title}
      name={d.name}
      img={d.img}
      mail={d.mail}
      link={d.link}
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
