import React from 'react';
import classNames from 'classnames';

import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

interface IProps {
  year: number;
  setYear(y: number): void;
}

const Year: React.FC<IProps> = ({ year, setYear }) => {
  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setYear(newValue + 2015);
  };

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
          {/* <Tab label="2021" value={2022 - 2015} /> */}
          <Tab label="2021" value={2021 - 2015} />
          <Tab label="2020" value={2020 - 2015} />
          <Tab label="2019" value={2019 - 2015} />
          <Tab label="2018" value={2018 - 2015} />
          <Tab label="2017" value={2017 - 2015} />
          <Tab label="2016" value={2016 - 2015} />
          <Tab label="2015" value={2015 - 2015} />
        </Tabs>
      </AppBar>
    </div>
  );
};

export default Year;
