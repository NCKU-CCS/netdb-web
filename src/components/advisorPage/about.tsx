import React from 'react';
import classNames from 'classnames';

const About: React.FC = () => (
  <div className={classNames('advisorpage-about')}>
    <div className={classNames('advisorpage-about-top-container')}>
      <div className={classNames('advisorpage-about-top-text')}>
        <h3>Kun-Ta Chuang (莊坤達)</h3>
        <div>Associate Professor</div>
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
      <h4>About me</h4>
      <p>
        Kun-Ta Chuang currently serves as an associate professor in Department
        of Computer Science and Information Engineering in National Cheng Kung
        University.
        <br />
        He was a senior engineer at EDA giant Synopsys during 2006-2011.
        <br />
        He received the Ph.D. degree from Graduate Institute of Communication
        Engineering, National Taiwan University, Taipei, Taiwan in 2006.
        <br />
        His research interests include data mining, web technology, mobile data
        management, and cloud computing.
        <br />
      </p>
    </div>
  </div>
);

export default About;
