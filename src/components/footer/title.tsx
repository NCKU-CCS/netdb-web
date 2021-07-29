import React from 'react';
import classNames from 'classnames';

const Title: React.FC = () => (
  <div className={classNames('footer-title')}>
    <img
      className={classNames('footer-title-img')}
      alt="NetDB Lab"
      src={`${process.env.PUBLIC_URL}/navbar/title.png`}
    />
  </div>
);

export default Title;
