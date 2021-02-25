import React from 'react';
import members from './members.json';
import Banner from './banner';
import Position from './position';

const MemberPageContainer: React.FC = () => {
  const { consultant, postdoc, assistant, phd, master, bachelor } = members;
  return (
    <>
      <Banner />
      <Position title="Technical Consultant" members={consultant} />
      <Position title="Post-Doc" members={postdoc} />
      <Position title="Teaching Assistant" members={assistant} />
      <Position title="Ph.D" members={phd} />
      <Position title="Master" members={master} />
      <Position title="Bachelor" members={bachelor} />
    </>
  );
};

export default MemberPageContainer;
