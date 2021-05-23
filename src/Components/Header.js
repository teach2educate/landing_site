import React, { Component } from 'react';
import { Hero } from './styled';
class Header extends Component {
  render() {
    var socials = [
      {
        name: 'linkedin',
        url: 'https://www.linkedin.com/company/teach2educate/',
        className: 'fa fa-linkedin',
      },
      {
        name: 'facebook',
        url: 'https://www.facebook.com/teach2educate/',
        className: 'fa fa-facebook',
      },
    ];
    var networks = socials.map(function (network) {
      return (
        <li key={network.name}>
          <a href={network.url}>
            <i className={network.className}></i>
          </a>
        </li>
      );
    });

    return (
      <header id="home">
        <nav id="nav-wrap">
          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
            Show navigation
          </a>
          <a className="mobile-btn" href="#home" title="Hide navigation">
            Hide navigation
          </a>

          <ul id="nav" className="nav">
            <li className="current">
              <a className="smoothscroll" href="#home">
                Home
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#visionMission">
                Vision & Mission
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#team_culture">
                Team
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#awards">
                Awards
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#testimonials">
                Testimonals
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#career">
                Careers
              </a>
            </li>
            {/* <li><a className="smoothscroll" href="#contact">Contact</a></li> */}
          </ul>
        </nav>

        <Hero className="row banner">
          <div className="banner-text">
            <h1 className="responsive-headline">Teach2Educate</h1>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <h3 style={{ color: 'white', fontWeight: 'bold' }}>
              We are a Peer-to-Peer based learner-centric platform to enhance
              student engagement with active & collaborative learning activities
              in blended classroom settings while recognising, fostering unique
              skill sets of each student to promote their holistic development.
            </h3>
            <ul className="social">{networks}</ul>
          </div>
        </Hero>

        <p className="scrolldown">
          <a className="smoothscroll" href="#visionMission">
            <i className="icon-down-circle"></i>
          </a>
        </p>
      </header>
    );
  }
}

export default Header;
