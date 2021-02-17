import React from 'react';
import classNames from 'classnames';

const About: React.FC = () => (
  <div className={classNames('advisorpage-about')}>
    <div className={classNames('advisorpage-about-top-container')}>
      <div className={classNames('advisorpage-about-top-text')}>
        <h3>Kun-Ta Chuang (莊坤達)</h3>
        <div>Assistant Professor</div>
        <div>
          Tainan City, Taiwan Dept. of Computer Science and Information
          Engineering, National Cheng Kung University
        </div>
        <a href="mailto:ktchuang@mail.ncku.edu.tw">
          <img
            alt="email"
            src={`${process.env.PUBLIC_URL}/advisorPage/mail.svg`}
          />
          ktchuang@mail.ncku.edu.tw
        </a>
      </div>
      <img
        alt="Kun-Ta Chuang (莊坤達)"
        src={`${process.env.PUBLIC_URL}/advisorPage/ktchuang.jpeg`}
      />
    </div>
    <div className={classNames('advisorpage-about-bottom-container')}>
      About me
    </div>
  </div>
);

export default About;
