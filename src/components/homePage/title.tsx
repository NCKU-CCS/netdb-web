import React from 'react';
import classNames from 'classnames';

interface IProps {
  text: string;
}

const Title: React.FC<IProps> = ({ text }) => (
  <div className={classNames('homepage-title')} data-aos="fade-up">
    {text}
  </div>
);

export default Title;
