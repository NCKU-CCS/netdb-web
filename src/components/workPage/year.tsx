/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useState } from 'react';
import classNames from 'classnames';

const Year: React.FC = () => {
  const [btnClicked, setBtnClicked] = useState<number>(1);

  return (
    <div className={classNames('workpage-year')}>
      <div className={classNames('workpage-year-buttons')}>
        <button type="button" onClick={() => setBtnClicked(1)}>
          2021
        </button>
        <button type="button" onClick={() => setBtnClicked(2)}>
          2020
        </button>
        <button type="button" onClick={() => setBtnClicked(3)}>
          2019
        </button>
        <button type="button" onClick={() => setBtnClicked(4)}>
          2018
        </button>
        <button type="button" onClick={() => setBtnClicked(5)}>
          2017
        </button>
        <button type="button" onClick={() => setBtnClicked(6)}>
          2016
        </button>
        <button type="button" onClick={() => setBtnClicked(7)}>
          2015
        </button>
        <div
          className={classNames(
            'workpage-year-bar',
            `workpage-year-bar--${btnClicked}`,
          )}
        />
      </div>
    </div>
  );
};

export default Year;
