import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import classNames from 'classnames';

const Application: React.FC = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div
      className={classNames('homepage-application')}
      data-aos="fade-up"
      data-aos-easing="ease-in"
      data-aos-duration="500"
    >
      <img
        alt="application"
        src={`${process.env.PUBLIC_URL}/homePage/application/bg.png`}
      />
      <div className={classNames('homepage-application-text')}>
        <h3>DLT Application</h3>
        <p>
          The new era of data exchange is coming. By exploring distributed
          ledger technology (DLT), it can empower the trust of data while
          preserving the privacy of data. We develop DLT application to
          digitalize your assets and build smart contract to automate the
          transaction between you and the others.
        </p>
        <ul>
          <li> • Green Energy Certificate</li>
          <li> • Energy Trading Platform</li>
          <li> • Digital Graduation Certificate</li>
        </ul>
      </div>
    </div>
  );
};

export default Application;
