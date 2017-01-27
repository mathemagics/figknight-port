import React, { Component } from 'react';
import { connect } from 'react-redux';
import Slider from 'react-slick';
import Devices from 'material-ui/svg-icons/hardware/devices-other';
import Computer from 'material-ui/svg-icons/hardware/laptop-mac';
import UX from 'material-ui/svg-icons/action/face';

import Slide from './main_slide';
import figtree from '../images/figtree2.jpg';
import fig from '../images/figlogo.png';

import { setSlide } from '../actions';

import '../style/slider.scss';
import '../style/figs.scss';

class main extends Component {
  render() {
    const settings = {
      customPaging: (i) => {
        switch (i) {
          case 0:
            return <a className={this.props.slide === 0 ? 'btn-highlighted' : ''}>Web Design</a>;
          case 1:
            return <a className={this.props.slide === 1 ? 'btn-highlighted' : ''}>User Experience</a>;
          case 2:
            return <a className={this.props.slide === 2 ? 'btn-highlighted' : ''}>Mobile Apps</a>;
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

    return (
      <div className="main">
        <article>
          <img alt="fig" src={figtree} className="logo-img" />
          <div style={{ position: 'relative', width: 0, height: 0 }}>
            <img alt="fig" src={fig} className="fig1" />
            <img alt="fig" src={fig} className="fig2" />
            <img alt="fig" src={fig} className="fig3" />
          </div>
          <div>
            <section>
              We help brands <span>stand out</span> and deliver unified,
              seamless experiences to their customers.
            </section>
          </div>
        </article>
        <div className="slider">
          <Slider {...settings} className="main-slider">
            <div>
              <Slide>
                <Computer style={{ height: 50, width: 50 }} />
                <div className="slide-text">
                  Cutting-edge website design to reflect your brand&#39;s needs
                </div>
              </Slide>
            </div>
            <div>
              <Slide>
                <UX style={{ height: 50, width: 50 }} />
                <div className="slide-text">
                  Seamless User experience that will define your business and
                  keep users coming back.
                </div>
              </Slide>
            </div>
            <div>
              <Slide>
                <Devices style={{ height: 50, width: 50 }} />
                <div className="slide-text">
                  Connecting to your customers wherever they may be with customized
                  apps for Android and iOS
                </div>
              </Slide>
            </div>
          </Slider>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  const { slide } = state.main;
  return { slide };
};

export default connect(mapStateToProps, { setSlide })(main);
