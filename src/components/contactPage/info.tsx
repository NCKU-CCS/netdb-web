import React from 'react';
import classNames from 'classnames';

const Info: React.FC = () => (
  <div className={classNames('contactpage-info')}>
    <h1>Contact Us</h1>
    <div className={classNames('contactpage-info-content')}>
      <img alt="netdb" src={`${process.env.PUBLIC_URL}/contactPage/icon.png`} />
      <div className={classNames('contactpage-info-location')}>
        <img
          alt="location"
          src={`${process.env.PUBLIC_URL}/contactPage/location.png`}
        />
        <p>
          Dept. of Computer Science and Information Engineering
          <br /> Advanced Network Database Lab (NCKU Netdb Lab)
          <br /> 1 University Road, Tainan, Taiwan 701
        </p>
      </div>
      <div className={classNames('contactpage-info-contact')}>
        <div className={classNames('contactpage-info-contact-item')}>
          <img
            alt="phone"
            src={`${process.env.PUBLIC_URL}/contactPage/phone.png`}
          />
          <a href="tel:+886-6-2757575">+886-6-2757575 ext. 62520 # 2608</a>
        </div>
        <div className={classNames('contactpage-info-contact-item')}>
          <img
            alt="mail"
            src={`${process.env.PUBLIC_URL}/contactPage/mail.png`}
          />
          <a href="mailto:netdb@netdb.csie.ncku.edu.tw">
            netdb @ netdb.csie.ncku.edu.tw
          </a>
        </div>
      </div>
    </div>
  </div>
);

export default Info;
