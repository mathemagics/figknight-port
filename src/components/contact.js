import React from 'react';
import Paper from 'material-ui/Paper';

export default () => {
  const style = {
    position: 'relative',
    top: '5vh',
    height: 200,
    width: 300,
    margin: 20,
    textAlign: 'left',
    display: 'inline-block',
    fontFamily: 'Dosis',
    paddingTop: '3%',
  };
  return (
    <div className="contact">
      <Paper style={style} zDepth={0} >
        2631 Pandora St.
        Vancouver BC, Canada
        V5K-1V9
      </Paper>
    </div>
  );
};
