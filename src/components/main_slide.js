import React from 'react';

export default (props) => {
  return (
    <div className="main-slide">
      <div className="slide-contents">
        {props.children}
      </div>
    </div>
  );
};
