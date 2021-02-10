import React from 'react';
import classNames from 'classnames';

const Map: React.FC = () => (
  <div className={classNames('contactpage-map')}>
    <iframe
      title="map"
      src={`https://www.google.com/maps/embed/v1/place?q=place_id:ChIJpdKpN5N2bjQR16Yj4WX3CAk&key=${process.env.REACT_APP_GOOGLE_MAP_API_KEY}`}
      allowFullScreen
    />
  </div>
);

export default Map;
