import React from 'react';
import members from './members.json';

const MemberPageContainer: React.FC = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { consultant, postdoc, assistant, phd, master, bachelor } = members;
  return <>member page</>;
};

export default MemberPageContainer;
