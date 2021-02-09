import React from 'react';
import classNames from 'classnames';

const Contact: React.FC = () => (
  <div className={classNames('footer-contact')}>
    <div className={classNames('footer-contact-item')}>
      <img alt="mail" src={`${process.env.PUBLIC_URL}/footer/mail.png`} />
      <div>netdb@netdb.csie.ncku.edu.tw</div>
    </div>
    <div className={classNames('footer-contact-item')}>
      <img alt="mail" src={`${process.env.PUBLIC_URL}/footer/phone.png`} />
      <div>+886-6-2757575 ext. 62520 # 2608</div>
    </div>
  </div>
);

export default Contact;
