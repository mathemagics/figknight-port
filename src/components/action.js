import React from 'react';
import { Link } from 'react-router';

export default (props) => {
  const file = props.name.toLowerCase().replace(/ /g, '');
  return (
    <div className="action">
      <Link to={`/${file}`}>
        {props.name}
      </Link>
    </div>
  );
};
