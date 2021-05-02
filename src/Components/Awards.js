import React, { Component } from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
class Awards extends Component {
    render() {
        const properties = {
            duration: 1200,
            autoplay: true,
            transitionDuration: 500,
            arrows: false,
            infinite: true,
            easing: "ease",
        };
        return (
            <section id="awards">
                <div>
                    <br/>
                    <h2>Awards</h2>
                    <br/>
                    <div className="slide-container">
                        <Slide {...properties}>
                            <div className="each-slide">
                                <div className="image-container">
                                    <img src='images/header-background.jpg' alt="" />
                                </div>
                                {/* <h3>First Slide</h3> */}
                            </div>
                            <div className="each-slide">
                                <div className="image-container">
                                    <img src='images/testimonials-bg.jpg' alt="" />
                                </div>
                                {/* <h3>Second Slide</h3> */}
                            </div>
                        </Slide>
                    </div>
                </div>
            </section>
        );
    }
}

export default Awards;