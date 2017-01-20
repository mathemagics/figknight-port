import React from 'react';
import _ from 'lodash';
import Action from './action';

const renderActions = (actions) => {
  return _.map(actions, (action) => {
    return (
      <li key={action}><Action name={action} /></li>
    );
  });
};

export default (props) => {
  return (
    <ul className="header">
      {renderActions(props.links)}
    </ul>
  );
};
