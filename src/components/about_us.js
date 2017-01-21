import React from 'react';
import { GridList, GridTile } from 'material-ui/GridList';
import paul from '../images/grid-list/paul.jpg';
import ben from '../images/grid-list/ben.jpg';
import cd from '../images/grid-list/cd.jpeg';
import oc from '../images/grid-list/oc.jpg';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: 500,
    height: 450,
    overflowY: 'auto',
  },
};
const tilesData = [
  {
    img: paul,
    title: 'Paul Bodnar',
    position: 'Front End,  Mobile',
  },
  {
    img: ben,
    title: 'Ben Brenner',
    position: 'Front End,  Mobile',
  },
  {
    img: cd,
    title: 'Chris Dimoff',
    position: 'Front End,  Mobile',
  },
  {
    img: oc,
    title: 'Chris Simmons',
    position: 'Front End,  Mobile',
  },
];

export default () => {
  return (
    <div style={styles.root} className="aboutus">
      <GridList
        cellHeight={180}
        style={styles.gridList}
      >
        {tilesData.map((tile) => {
          return (
            <GridTile
              key={tile.img}
              title={tile.title}
              subtitle={<span><b>{tile.position}</b></span>}
            >
              <img alt="bg" src={tile.img} />
            </GridTile>
          );
        })}
      </GridList>
    </div>
  );
};
