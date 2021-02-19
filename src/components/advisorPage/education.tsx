import React from 'react';
import classNames from 'classnames';

const Education: React.FC = () => (
  <div className={classNames('advisorpage-education')}>
    <h3>Education ＆ Experience</h3>
    <section>
      <h4>Education</h4>
      <div>
        <span>2001 - 2006</span>
        <p>
          National Taiwan University
          <br />
          Ph.D., Graduate Institute of Communication Engineering
        </p>
      </div>
    </section>
    <section>
      <h4>Experience</h4>
      <div>
        <span>2001 - 2006</span>
        <p>
          Postdoctoral fellow
          <br />
          Academia Sinica \ Research Center for Information Technology
          Innovation
        </p>
      </div>
      <div>
        <span>2006 - 2011</span>
        <p>
          Senior Engineer
          <br />
          Synopsys \ Algorithm Design for Synopsys Physical Verification (DRC)
        </p>
      </div>
      <div>
        <span>2000 - 2001</span>
        <p>
          PREA-T \ \ Intern
          <br />
          Philips Research East Asia, Taipei, Taiwan
        </p>
      </div>
    </section>
    <section className={classNames('advisorpage-education-award-container')}>
      <h4>Honor ＆ Awards</h4>
      <div className={classNames('advisorpage-education-award-content')}>
        Ericsson Taiwan Ph.D. Fellowship, 2001
      </div>
    </section>
  </div>
);

export default Education;
