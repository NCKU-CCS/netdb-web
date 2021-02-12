import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import classNames from 'classnames';

const Service: React.FC = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div
      className={classNames('homepage-service')}
      data-aos="fade-up"
      data-aos-easing="ease-in"
      data-aos-duration="500"
    >
      <div className={classNames('homepage-service-text')}>
        <h3>Quality-of-Life as a Service</h3>
        <p>
          We target on providing a data analytics cloud platform to business
          which can promote the quality of life. We are considering about how to
          enhance the society/community quality and resource allocation.
        </p>
        <ul>
          <li> • Demand forecast</li>
          <li> • Water Leakage</li>
          <li> • Behavior Analysis</li>
          <li> • Occupancy Detection</li>
          <li> • Demand Response</li>
          <li> • Battery Scheduling</li>
        </ul>
      </div>
      <img
        alt="service"
        src={`${process.env.PUBLIC_URL}/homePage/service/bg.png`}
      />
    </div>
  );
};

export default Service;
