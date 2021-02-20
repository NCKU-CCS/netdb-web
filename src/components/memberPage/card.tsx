import React from 'react';

interface IProps {
  title: string;
  name: string;
  mail: string;
  website: string;
  expertise: string[];
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Card: React.FC<IProps> = ({ title, name, mail, website, expertise }) => (
  <div>Card</div>
);

export default Card;
