import React from 'react';
import classNames from 'classnames';

const Partner: React.FC = () => (
  <div className={classNames('homepage-partner')} data-aos="fade-up">
    <div className={classNames('homepage-partner-title')}>Partnership</div>
    <div className={classNames('homepage-partner-img-container')}>
      <img
        alt="TEPCO"
        src={`${process.env.PUBLIC_URL}/homePage/partner/TEPCO.png`}
      />
      <img
        alt="nextDrive"
        src={`${process.env.PUBLIC_URL}/homePage/partner/nextDrive.png`}
      />
      <img
        alt="FarEasTone"
        src={`${process.env.PUBLIC_URL}/homePage/partner/FarEasTone.png`}
      />
      <img
        alt="BiiLabs"
        src={`${process.env.PUBLIC_URL}/homePage/partner/BiiLabs.png`}
      />
      <img
        alt="NCKU-hospital"
        src={`${process.env.PUBLIC_URL}/homePage/partner/NCKU-hospital.png`}
      />
      <img
        alt="Tohoku"
        src={`${process.env.PUBLIC_URL}/homePage/partner/Tohoku.png`}
      />
      <img
        alt="amazon"
        src={`${process.env.PUBLIC_URL}/homePage/partner/amazon.png`}
      />
      <img
        alt="dentsu"
        src={`${process.env.PUBLIC_URL}/homePage/partner/dentsu.png`}
      />
      <img
        alt="Deloitte"
        src={`${process.env.PUBLIC_URL}/homePage/partner/Deloitte.png`}
      />
      <img
        alt="azbil"
        src={`${process.env.PUBLIC_URL}/homePage/partner/azbil.png`}
      />
      <img
        alt="elDesign"
        src={`${process.env.PUBLIC_URL}/homePage/partner/elDesign.png`}
      />
      <img
        alt="GDBL"
        src={`${process.env.PUBLIC_URL}/homePage/partner/GDBL.png`}
      />
      <img
        alt="sugar"
        src={`${process.env.PUBLIC_URL}/homePage/partner/sugar.png`}
      />
      <img
        alt="oil"
        src={`${process.env.PUBLIC_URL}/homePage/partner/oil.png`}
      />
      <img
        alt="taipower"
        src={`${process.env.PUBLIC_URL}/homePage/partner/taipower.png`}
      />
      <img
        alt="insurance"
        src={`${process.env.PUBLIC_URL}/homePage/partner/insurance.png`}
      />
      <img
        alt="gongchuan"
        src={`${process.env.PUBLIC_URL}/homePage/partner/gongchuan.png`}
      />
      <img
        alt="MEDIATEK"
        src={`${process.env.PUBLIC_URL}/homePage/partner/MEDIATEK.png`}
      />
    </div>
  </div>
);

export default Partner;
