import React from 'react';
import { connect } from 'react-redux';
import { GridList, GridTile } from 'material-ui/GridList';
import pokemango from '../images/grid-list/pokemango.jpg';
import beach from '../images/grid-list/1111beach.jpg';
import toggleModal from '../actions';

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
    img: pokemango,
    title: 'Poke-MAN GO',
  },
  {
    img: beach,
    title: '1111 Beach',
  },
];

// const renderModal = () => {
// };

const Modal = () => {
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
              subtitle={<span><b>{tile.author}</b></span>}
            >
              <img alt="bg" src={tile.img} />
            </GridTile>
          );
        })}
      </GridList>
    </div>
  );
};

const mapStateToProps = ({ main }) => {
  const { modal } = main;
  return { modal };
};

export default connect(mapStateToProps, { toggleModal })(Modal);
