import React from 'react';

interface IMember {
  name: string;
  mail: string;
  website: string;
  expertise: string[];
}

interface IProps {
  title: string;
  members: IMember;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Position: React.FC<IProps> = ({ title, members }) => <div>Position</div>;

export default Position;
