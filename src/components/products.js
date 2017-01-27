import React, { Component } from 'react';
import { connect } from 'react-redux';
import { GridList, GridTile } from 'material-ui/GridList';
import pokemango from '../images/grid-list/pokemango.jpg';
import beach from '../images/grid-list/1111beach.jpg';
import { toggleModal } from '../actions';
import Modal from './modal';

const styles = {
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

class Products extends Component {
  selectModal = (num) => {
    return () => {
      return this.props.toggleModal(num);
    };
  }

  renderModal = (num) => {
    return (
      <Modal selection={num}>
        <h1> hi </h1>
      </Modal>
    );
  };

  render() {
    const { modal } = this.props;
    return (
      <div className="aboutus">
        {modal !== 0 ? this.renderModal(modal) : null}
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
  }
}

const mapStateToProps = ({ main }) => {
  const { modal } = main;
  return { modal };
};

export default connect(mapStateToProps, { toggleModal })(Products);
