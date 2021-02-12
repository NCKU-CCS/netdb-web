import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import classNames from 'classnames';

interface IProps {
  imgName: string;
  title: string;
  content: string;
}

const Domain: React.FC<IProps> = ({ imgName, title, content }) => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div
      className={classNames('homepage-research-domain')}
      data-aos="fade-up"
      data-aos-easing="ease-in"
      data-aos-duration="500"
    >
      <img
        alt={imgName}
        src={`${process.env.PUBLIC_URL}/homePage/research/${imgName}.png`}
      />
      <h3>{title}</h3>
      <p>{content}</p>
    </div>
  );
};

export default Domain;
