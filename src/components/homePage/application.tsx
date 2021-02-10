import React from 'react';
import classNames from 'classnames';

const Application: React.FC = () => (
  <div className={classNames('homepage-application')}>
    <img
      alt="application"
      src={`${process.env.PUBLIC_URL}/homePage/application/bg.png`}
    />
    <div className={classNames('homepage-application-text')}>
      <h3>DLT Application</h3>
      <p>
        The new era of data exchange is coming. By exploring distributed ledger
        technology (DLT), it can empower the trust of data while preserving the
        privacy of data. We develop DLT application to digitalize your assets
        and build smart contract to automate the transaction between you and the
        others.
      </p>
      <ul>
        <li> • Green Energy Certificate</li>
        <li> • Energy Trading Platform</li>
        <li> • Digital Graduation Certificate</li>
      </ul>
    </div>
  </div>
);

export default Application;
