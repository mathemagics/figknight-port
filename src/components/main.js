import React, { Component } from 'react';
import { connect } from 'react-redux';
import Slider from 'react-slick';
import Slide from './main_slide';
import HeaderTitle from './header_title';

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
    return (
      <div className="main">
        <HeaderTitle>Fig Knight</HeaderTitle>
        <div className="slider">
          <Slider {...settings}>
            <div>
              <Slide>
                At Fig Knight we understand that a website is more than just
                a place for information: it is both an extension of your brand
                and your best salesperson. We believe every business, no matter
                the size and budget, deserves a cutting-edge website designed
                to reflect what’s important: your brand.
              </Slide>
            </div>
            <div>
              <Slide>
                It only takes three to five minutes for someone to form a first
                 impression, and at Fig Knight we know first impressions
                  matter. We’ll work to provide you with a seamless user
                   experience that will define your business and keep users
                    coming back.
              </Slide>
            </div>
            <div>
              <Slide>
                Just because all large businesses have mobile apps doesn’t mean
                that they should be the only ones with mobile apps. Imagine what
                your small business could accomplish if its offerings, products,
                and specials were always inches away from your customer’s fingertips.
                Fig Knight offers a range of mobile app packages with large business
                quality at a small business price.
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
