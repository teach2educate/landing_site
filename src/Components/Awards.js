import React, { Component } from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import { Section } from './styled';
class Awards extends Component {
  render() {
    const properties = {
      duration: 1300,
      autoplay: true,
      transitionDuration: 800,
      arrows: false,
      infinite: true,
      easing: 'ease',
    };
    var images = [
      // 'images/awards/awards_1.png',
      // 'images/awards/awards_2.png',
      // 'images/awards/awards_3.png',
      // 'images/awards/awards_4.png',
      // 'images/awards/awards_5.png',
      // 'images/awards/awards_6.png',
      // 'images/awards/awards_7.png',
      'images/awards/announcement.png',
      'images/awards/suma_vijetha.png',
      'images/awards/trophies.png',
      'images/awards/certificate_suma.png',
    ];
    var awardsImages = images.map(function (image) {
      return (
        <div className="each-slide" key={image}>
          <div className="image-container">
            <img src={image} height="100%" alt="" />
          </div>
          {/* <h3>First Slide</h3> */}
        </div>
      );
    });
    return (
      <Section class="" id="awards">
        <div>
          <h2>Awards</h2>
          <br />
          <div className="slide-container">
            <Slide {...properties}>{awardsImages}</Slide>
          </div>
        </div>
      </Section>
    );
  }
}

export default Awards;
