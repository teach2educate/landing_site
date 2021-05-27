import React, { Component } from 'react';
import { Section } from './styled';

class Careers extends Component {
  render() {
    return (
      <Section id="career">
        <div style={{ textAlign: 'center' }}>
          <h2><span role="img" aria-label="careers">🤝</span> Careers @ T2E</h2>
          <br></br>
          <h4><span role="img" aria-label="culture">🤗</span> Our Culture</h4>
          <ul>
            <li>
              <span>&bull;</span> Fun loving & fast pace workplace, where we
              bond & grow together
            </li>
            <li>
              <span>&bull;</span> Get regular feedback and we appreciate
              constructive criticism
            </li>
            <li>
              <span>&bull;</span> Intern's opinion is valued
              as much as CEOs
            </li>
            {/* <li>
              <span>&bull;</span> Open communication and transparent culture
            </li> */}
            <li>
              <span>&bull;</span> Promote research as part of work
            </li>
          </ul>

          {/* <br></br> */}
          <h4><span role="img" aria-label="perks">🤩</span> Perks</h4>
          <ul>
            <li>
              <span>&bull;</span> Spot Bonus rewards for pitching ideas tat gets approved by employees
            </li>
            <li>
              <span>&bull;</span> Be a part of our early team, and shape our offerings grounds up
            </li>
            <li>
              <span>&bull;</span> Great stipend, plus generous equity for the skilled and key roles
            </li>
            <li>
              <span>&bull;</span> Full ownership and massive growth opportunities
            </li>
            <li>
              <span>&bull;</span> Work from your comfort zone
            </li>
          </ul>

          {/* <br></br> */}
          <h4><span role="img" aria-label="values">😇</span> Values we look for</h4>
          <ul>
            <li>
              <span>&bull;</span> Ambitious to build something meaningful,
              impactful, proud off
            </li>
            <li>
              <span>&bull;</span> Passionate about making a difference by what
              we do
            </li>
            <li>
              <span>&bull;</span> Curious and asks the right questions
            </li>
          </ul>

          <br></br>
          <a
            href="https://angel.co/company/teach2educate-1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button><span role="img" aria-label="values">🤲🏻</span> Join Us</button>
          </a>
        </div>
      </Section>
    );
  }
}

export default Careers;
