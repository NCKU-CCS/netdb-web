import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

interface IProps {
  path: string;
  name: string;
}

const NavLink: React.FC<IProps> = ({ path, name }) => {
  const [selected, setSelected] = useState(false);

  useEffect(() => {
    if (path === '/' && window.location.pathname === '/netdb-web/') {
      setSelected(true);
    } else if (path !== '/' && window.location.pathname.includes(path)) {
      setSelected(true);
    } else setSelected(false);
  }, [path]);

  return (
    <Link to={path} className={classNames(`${selected ? 'selected' : ''}`)}>
      {name}
    </Link>
  );
};

export default NavLink;
