import React from 'react';
import classNames from 'classnames';

const Research: React.FC = () => (
  <div className={classNames('advisorpage-research')}>
    <h3>Research Interest ＆ Teaching</h3>
    <section>
      <h4>Research Interest</h4>
      <ul className={classNames('advisorpage-research-interest-list')}>
        <li> • Data Mining</li>
        <li> • Web Intelligence</li>
        <li> • Database</li>
        <li> • Distributed Ledger Technology</li>
        <li> • Cloud Computing</li>
        <li> • Intelligent Engine Management</li>
      </ul>
    </section>
    <section>
      <h4>Teaching</h4>
      <ul className={classNames('advisorpage-research-teaching-list')}>
        <li>
          <span>2015/9 - 2016/1</span> &nbsp;&nbsp; Introduction to Know.
          Discovery and Data Engineering
        </li>
        <li>
          <span>2015/2 - 2015/6</span> &nbsp;&nbsp; Theory of Computation
        </li>
        <li>
          <span>2014/9 - 2015/2</span> &nbsp;&nbsp; Introduction to Cloud
          Computing and System
        </li>
      </ul>
    </section>
  </div>
);

export default Research;
