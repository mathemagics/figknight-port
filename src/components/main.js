import React, { Component } from 'react';
import { connect } from 'react-redux';
import Slider from 'react-slick';
import Paper from 'material-ui/Paper';
import Slide from './main_slide';
import figtree from '../images/figtree2.jpg';

import { setSlide } from '../actions';

class main extends Component {
  render() {
    const settings = {
      customPaging: (i) => {
        switch (i) {
          case 0:
            return <a className={`main-btn ${this.props.slide === 0 ? 'btn-highlighted' : ''}`}>Web Design</a>;
          case 1:
            return <a className={`main-btn ${this.props.slide === 1 ? 'btn-highlighted' : ''}`}>User Experience</a>;
          case 2:
            return <a className={`main-btn ${this.props.slide === 2 ? 'btn-highlighted' : ''}`}>Mobile Apps</a>;
          default:
            return null;
        }
      },
      dots: true,
      autoplay: true,
      dotsClass: 'info-list',
      infinite: true,
      autoplaySpeed: 6000,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,
      beforeChange: this.props.setSlide,
    };
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
      <div className="main">
        <div className="main-box">
          <img alt="fig" src={figtree} className="header-img" />
          <div className="paper-text">
            <Paper style={style} zDepth={0} >
              We help brands <span>stand out</span> and deliver unified,
              seamless experiences to their customers.
            </Paper>
          </div>
        </div>
        <div className="slider">
          <Slider {...settings} className="main-slider">
            <div>
              <Slide>
                Cutting-edge website design to reflect your brand&#39;s needs
              </Slide>
            </div>
            <div>
              <Slide>
                Seamless User experience that will define your business and keep users coming back.
              </Slide>
            </div>
            <div>
              <Slide>
                Just because all large businesses have mobile apps doesn’t mean
              </Slide>
            </div>
          </Slider>
        </div>
      </div>
    );
  }
}
const mapStateToProps = ({ mainSlides }) => {
  const { slide } = mainSlides;
  return { slide };
};

export default connect(mapStateToProps, { setSlide })(main);
