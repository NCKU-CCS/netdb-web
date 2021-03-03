import React, { useState } from 'react';
import Banner from './banner';
import Year from './year';

const WorkPageContainer: React.FC = () => {
  const [year, setYear] = useState<number>(2021);

  return (
    <>
      <Banner />
      <Year year={year} setYear={setYear} />
    </>
  );
};

export default WorkPageContainer;
