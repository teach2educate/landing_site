import React, { Component } from 'react';
// import { Section } from './styled';
class Footer extends Component {
  render() {
    // var socials = [
    //   {
    //     "name": "linkedin",
    //     "url": "https://www.linkedin.com/company/teach2educate/",
    //     "className": "fa fa-linkedin"
    //   },
    //   {
    //     "name": "facebook",
    //     "url": "https://www.facebook.com/teach2educate/",
    //     "className": "fa fa-facebook"
    //   }
    // ];
    // var networks = socials.map(function (network) {
    //   return <li key={network.name}><a href={network.url}><i className={network.className}></i></a></li>
    // });
    return (
      <footer>
        <div className="row">
          <div className="twelve columns">
            {/* <ul className="social-links">
              {networks}
            </ul> */}

            <ul className="copyright">
              <li style={{ color: 'white', fontWeight: 'bold' }}>
                &copy; 2021, Teach2Educate
              </li>
            </ul>
          </div>
          <div id="go-top">
            <a className="smoothscroll" title="Back to Top" href="#home">
              <i className="icon-up-open"></i>
            </a>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
