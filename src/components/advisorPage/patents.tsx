import React from 'react';
import classNames from 'classnames';

const Patents: React.FC = () => (
  <div className={classNames('advisorpage-patents')}>
    <h3 className={classNames('advisorpage-patents-title')}>
      Patents ＆ Publications
    </h3>
    <section className={classNames('advisorpage-patents-content-container')}>
      <h4 className={classNames('advisorpage-patents-content-title')}>
        Patents
      </h4>
      <div>
        I537756 藉由快照來快速擴展關聯式資料庫之系統及其方法, 台灣, 陳泊亨,
        莊坤達
      </div>
      <div>
        I541726 一個可彈性延伸的分散式計算叢集模組資源整合方法及其系統, 台灣,
        莊坤達, 李高丞, 李彥寬
      </div>
    </section>
    <section className={classNames('advisorpage-patents-content-container')}>
      <h4 className={classNames('advisorpage-patents-content-title')}>
        Publications
      </h4>
      <h5>Accepted Papers to be Published</h5>
      <div>
        1. Chi-Chun Lin, Kun-Ta Chuang, Wush Chi-Hsuan Wu, Ming-Syan Chen
        &quot;Budget-Constrained Real-Time Bidding Optimization: Multiple
        Predictors Make It Better&quot; ACM Transactions on Knowledge Discovery
        from Data (ACM TKDD)(Accepted)
      </div>
      <div>
        2. Chien-Wei Chang, Chu-Di Chen, Kun-Ta Chuang &quot;Queries of
        K-Discriminative Paths on Road Networks&quot; Knowledge and Information
        Systems (Accepted)
      </div>
      <div>
        3. Bo-Heng Chen, Cheng-Te Li, Kun-Ta Chuang &quot;A check-in shielding
        scheme against acquaintance inference in location-based social
        networks&quot; World Wide Web Journal (Accepted)
      </div>
      <h5>Refereed Papers</h5>
      <div>
        1. Shan-Yun Teng, Lo-Pang-Yun Ting, Mi-Yen Yeh, Kun-Ta Chuang
        &quot;Worship Prediction: Identify Followers in Celebrity-Dived
        Networks&quot; World Wide Web Journal, Volume 22 Issue 1, January 2019
      </div>
      <div>
        2. Bo-Heng Chen, Cheng-Te Li, Kun-Ta Chuang, Jun Pang, Yang Zhang
        &quot;An Active Learning-based Approach for Location-aware Acquaintance
        Inference&quot; Knowledge and Information Systems, Volume 59 Issue 3,
        June 2019
      </div>
      <div>
        3. Shan-Yun Teng, Wei-Shinn Ku, Kun-Ta Chuang &quot;Toward Mining
        Stop-by Behaviors in Indoor Space&quot; ACM
      </div>
    </section>
  </div>
);

export default Patents;
