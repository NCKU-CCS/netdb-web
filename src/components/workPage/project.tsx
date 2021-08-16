import React, { useState } from 'react';
import classNames from 'classnames';
import Button from '@material-ui/core/Button';
import Collapse from '@material-ui/core/Collapse';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';

interface IProps {
  name: string;
  type: string;
  slogan: string;
  introduction: string;
  link: string | null;
  img: string;
  partners: string[];
}

const Project: React.FC<IProps> = ({
  name,
  type,
  slogan,
  introduction,
  link,
  img,
  partners,
}) => {
  const [isImgExpanded, setIsImgExpanded] = useState(false);

  return (
    <div className={classNames('workpage-project-container')}>
      <div className={classNames('workpage-project-category')}>
        Project on {type}
      </div>
      <div className={classNames('workpage-project')}>
        <div className={classNames('workpage-project-card-left-container')}>
          <div className={classNames('workpage-project-text-header')}>
            <img
              className={classNames('workpage-project-card-left-img')}
              alt={type}
              src={`${process.env.PUBLIC_URL}/workPage/icons/${type}.svg`}
            />
            <div className={classNames('workpage-project-text-header-right')}>
              <div
                className={classNames(
                  'workpage-project-text-header-right-slogan',
                )}
              >
                {slogan}
              </div>
              <div
                className={classNames(
                  'workpage-project-card-header-name-container',
                )}
              >
                {name}
                {/* {link && (
                  <a
                    className={classNames('workpage-project-card-right-link')}
                    href={link}
                  >
                    <img
                      className={classNames('workpage-project-card-right-link-img')}
                      alt="fb"
                      src={`${process.env.PUBLIC_URL}/workPage/website.png`}
                    />
                  </a>
                )} */}
              </div>
            </div>
          </div>
          <p>{introduction}</p>
          <div className={classNames('workpage-project-text-footer')}>
            {partners.map((d) => (
              <img
                alt={d}
                src={`${process.env.PUBLIC_URL}/workPage/partners/${d}`}
              />
            ))}
          </div>
        </div>
        <div className={classNames('workpage-project-card-right-container')}>
          <Button
            className={classNames('workpage-project-card-right-expand-btn')}
            onClick={() => setIsImgExpanded(!isImgExpanded)}
          >
            {isImgExpanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </Button>
          {/* {link && (
            <a
              className={classNames('workpage-project-card-right-link')}
              href={link}
            >
              <img
                className={classNames('workpage-project-card-right-link-img')}
                alt="fb"
                src={`${process.env.PUBLIC_URL}/workPage/website.png`}
              />
            </a>
          )} */}
          <Collapse in={isImgExpanded} collapsedSize={100}>
            <img
              className={classNames('workpage-project-card-img', 'inside')}
              alt={img}
              src={`${process.env.PUBLIC_URL}/workPage/pics/${img}.png`}
            />
          </Collapse>
          <img
            className={classNames('workpage-project-card-img', 'outside')}
            alt={img}
            src={`${process.env.PUBLIC_URL}/workPage/pics/${img}.png`}
          />
        </div>
      </div>
    </div>
  );
};

export default Project;
