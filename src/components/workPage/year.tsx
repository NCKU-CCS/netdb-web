/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import classNames from 'classnames';

const Year: React.FC = () => (
  <div className={classNames('workpage-year')}>
    <div className={classNames('workpage-year-buttons')}>
      <button type="button">2021</button>
      <button type="button">2020</button>
      <button type="button">2019</button>
      <button type="button">2018</button>
      <button type="button">2017</button>
      <button type="button">2016</button>
      <button type="button">2015</button>
      <button type="button" className={classNames('workpage-year-bar')} />
    </div>
  </div>
);

export default Year;
