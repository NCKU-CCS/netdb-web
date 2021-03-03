import React from 'react';
import classNames from 'classnames';

interface IProps {
  year: number;
  setYear(y: number): void;
}

const Year: React.FC<IProps> = ({ year, setYear }) => (
  <div className={classNames('workpage-year')}>
    <div className={classNames('workpage-year-buttons')}>
      <button
        type="button"
        className={classNames(year === 2021 ? 'chosen' : '')}
        onClick={() => setYear(2021)}
      >
        2021
      </button>
      <button
        type="button"
        className={classNames(year === 2020 ? 'chosen' : '')}
        onClick={() => setYear(2020)}
      >
        2020
      </button>
      <button
        type="button"
        className={classNames(year === 2019 ? 'chosen' : '')}
        onClick={() => setYear(2019)}
      >
        2019
      </button>
      <button
        type="button"
        className={classNames(year === 2018 ? 'chosen' : '')}
        onClick={() => setYear(2018)}
      >
        2018
      </button>
      <button
        type="button"
        className={classNames(year === 2017 ? 'chosen' : '')}
        onClick={() => setYear(2017)}
      >
        2017
      </button>
      <button
        type="button"
        className={classNames(year === 2016 ? 'chosen' : '')}
        onClick={() => setYear(2016)}
      >
        2016
      </button>
      <button
        type="button"
        className={classNames(year === 2015 ? 'chosen' : '')}
        onClick={() => setYear(2015)}
      >
        2015
      </button>
      <div
        className={classNames(
          'workpage-year-bar',
          `workpage-year-bar--${year}`,
        )}
      />
    </div>
    <h5>{year}</h5>
  </div>
);

export default Year;
