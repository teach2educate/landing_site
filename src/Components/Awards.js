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
        var images = [
            'images/awards/awards_1.png',
            'images/awards/awards_2.png',
            'images/awards/awards_3.png',
            'images/awards/awards_4.png',
            'images/awards/awards_5.png',
            'images/awards/awards_6.png',
            'images/awards/awards_7.png',
        ];
        var awardsImages = images.map(
            function (image) {
                return <div className="each-slide" key={image}>
                    <div className="image-container">
                        <img src={image} alt="" />
                    </div>
                    {/* <h3>First Slide</h3> */}
                </div>
            }
        );
        return (
            <section id="awards">
                <div>
                    <br />
                    <h2>Awards</h2>
                    <br />
                    <div className="slide-container">
                        <Slide {...properties}>
                            {awardsImages}
                        </Slide>
                    </div>
                </div>
            </section>
        );
    }
}

export default Awards;