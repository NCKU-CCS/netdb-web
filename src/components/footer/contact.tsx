import React from 'react';
import classNames from 'classnames';

const Contact: React.FC = () => (
  <div className={classNames('footer-contact')}>
    <div className={classNames('footer-contact-item')}>
      <img alt="mail" src={`${process.env.PUBLIC_URL}/footer/mail.png`} />
      <a href="mailto:netdb@netdb.csie.ncku.edu.tw">
        netdb@netdb.csie.ncku.edu.tw
      </a>
    </div>
    <div className={classNames('footer-contact-item')}>
      <img alt="mail" src={`${process.env.PUBLIC_URL}/footer/phone.png`} />
      <a href="tel:+886-6-2757575">+886-6-2757575 ext. 62520 # 2608</a>
    </div>
  </div>
);

export default Contact;
