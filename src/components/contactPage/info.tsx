import React from 'react';
import classNames from 'classnames';

const Info: React.FC = () => (
  <div className={classNames('contactpage-info')}>
    <div className={classNames('contactpage-info-title')}>Contact Us</div>
    <div className={classNames('contactpage-info-content')}>
      <img
        className={classNames('contactpage-info-netdb-logo')}
        alt="netdb"
        src={`${process.env.PUBLIC_URL}/contactPage/icon.png`}
      />
      <div className={classNames('contactpage-info-right-container')}>
        <div className={classNames('contactpage-info-border')} />
        <div className={classNames('contactpage-info-location')}>
          <img
            className={classNames('contactpage-info-location-img')}
            alt="location"
            src={`${process.env.PUBLIC_URL}/contactPage/location.png`}
          />
          <div className={classNames('contactpage-info-location-text')}>
            <div className={classNames('contactpage-info-location-text-item')}>
              Dept. of Computer Science and Information Engineering
            </div>
            <div className={classNames('contactpage-info-location-text-item')}>
              Advanced Network Database Lab (NCKU Netdb Lab)
            </div>
            <div className={classNames('contactpage-info-location-text-item')}>
              1 University Road, Tainan, Taiwan 701
            </div>
          </div>
        </div>
        <div className={classNames('contactpage-info-border')} />
        <div className={classNames('contactpage-info-contact')}>
          <div className={classNames('contactpage-info-contact-item')}>
            <img
              className={classNames('contactpage-info-contact-item-img')}
              alt="phone"
              src={`${process.env.PUBLIC_URL}/contactPage/phone.png`}
            />
            <a
              className={classNames('contactpage-info-contact-item-link')}
              href="tel:+886-6-2757575"
            >
              +886-6-2757575 ext. 62520 # 2608
            </a>
          </div>
          <div className={classNames('contactpage-info-contact-item')}>
            <img
              className={classNames('contactpage-info-contact-item-img')}
              alt="mail"
              src={`${process.env.PUBLIC_URL}/contactPage/mail.png`}
            />
            <a
              className={classNames('contactpage-info-contact-item-link')}
              href="mailto:netdb@netdb.csie.ncku.edu.tw"
            >
              netdb@netdb.csie.ncku.edu.tw
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Info;
