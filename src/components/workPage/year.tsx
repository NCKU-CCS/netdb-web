import React from 'react';
import classNames from 'classnames';

import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import projects from './projects.json';

interface IProps {
  year: number;
  setYear(y: number): void;
}

const Year: React.FC<IProps> = ({ year, setYear }) => {
  const years = projects.map((item) => item.year).sort((a, b) => b - a);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setYear(newValue + 2015);
  };

  const createYearTabs = years
    .filter((value, index) => years.indexOf(value) === index)
    .map((value) => <Tab label={value} value={value - 2015} />);

  return (
    <div className={classNames('workpage-year')}>
      <AppBar position="static" color="transparent">
        <Tabs
          value={year - 2015}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="on"
        >
          {createYearTabs}
        </Tabs>
      </AppBar>
    </div>
  );
};

export default Year;
