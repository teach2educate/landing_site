import React, { Component } from 'react';
import { Section } from './styled';
class Team extends Component {
  render() {
    return (
      <Section id="team_culture">
        <br></br>
        <div className="row education">
          <div className="three columns header-col">
            <img
              className="profile-pic"
              src="images/team/ravi.png"
              alt="Ravi Raju"
            />
          </div>

          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">
                <div key="School">
                  <h3>
                    <a href="https://www.linkedin.com/in/ravirajuk/" target="_blank" rel="noopener noreferrer">
                      Ravi Raju Krishna
                    </a>
                  </h3>
                  <p className="info">Co-Founder</p>
                  <ul>
                    <li>
                      <span>&bull;</span> Ravi, an alumni of{' '}
                      <a href="https://pes.edu/" target="_blank" rel="noopener noreferrer">PES</a>, worked @{' '}
                      <a href="https://www.infinera.com/" target="_blank" rel="noopener noreferrer">Infinera</a>,
                      shouldering various SDLC responsibilities and groomed as
                      all-round Software Engineer for 4 years.{' '}
                    </li>
                    <li>
                      <span>&bull;</span> He pursued his Masters @{' '}
                      <a href="https://www.usc.edu/" target="_blank" rel="noopener noreferrer">USC</a> and worked as a
                      Data Scientist @{' '}
                      <a href="https://scryanalytics.ai/" target="_blank" rel="noopener noreferrer">Scry Analytics</a> and
                      Interned for edTech startup @{' '}
                      <a href="https://www.kidaptive.com/" target="_blank" rel="noopener noreferrer">Kidaptive</a>.{' '}
                    </li>
                    <li>
                      <span>&bull;</span> Empowered with the exposure to modern
                      educational practices adopted in US universities and his
                      expertise as a Full Stack Data Scientist, he decided to
                      return back to India and make a difference in our
                      education system.{' '}
                    </li>
                    <li>
                      <span>&bull;</span> He has been actively volunteering @{' '}
                      <a href="https://www.evidyaloka.org/" target="_blank" rel="noopener noreferrer">eVidyaLoka</a>,
                      teaching English to government school students while
                      experimenting various pedagogies to improve student
                      engagement.{' '}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br></br>
        <div className="row education">
          <div className="three columns header-col">
            <img
              className="profile-pic"
              src="images/team/vikas.png"
              alt="Vikas Badami"
            />
          </div>

          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">
                <div key="School">
                  <h3>
                    <a href="https://www.linkedin.com/in/vikasbadami/" target="_blank" rel="noopener noreferrer">
                      Vikas Badami
                    </a>
                  </h3>
                  <p className="info">Co-Founder</p>
                  <ul>
                    <li>
                      <span>&bull;</span> Vikas, an alumni of{' '}
                      <a href="http://www.nitc.ac.in/" target="_blank" rel="noopener noreferrer">NIT-Calicut</a>, founded{' '}
                      <a href="https://scicopath.com/" target="_blank" rel="noopener noreferrer">Scicopath</a>, a
                      socio-educational initiative addressing over 10000+
                      students from over 25 institutes.
                    </li>
                    <li>
                      <span>&bull;</span> He was listed among the top 21 global
                      scholars for the{' '}
                      <a href="https://www.youtube.com/watch?v=BCNopIfGTio" target="_blank" rel="noopener noreferrer">
                        School of AI Fellowship
                      </a>{' '}
                      in Italy in 2019.
                    </li>
                    <li>
                      <span>&bull;</span> He has been part of{' '}
                      <a href="https://plaksha.org/" target="_blank" rel="noopener noreferrer">Tech Leaders Fellowship</a>
                      ,{' '}
                      <a href="https://www.jagritiyatra.com/" target="_blank" rel="noopener noreferrer">Jagriti Yatra</a>,
                      Barefoot-edu, UC Berkeley's{' '}
                      <a href="https://www.globalventurecatalyst.org/" target="_blank" rel="noopener noreferrer">
                        Global Venture Catalyst
                      </a>
                      , Ecoversity Alliance and Harvard US India Initiative
                      before co-founding Teach2educate.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />
      </Section>
    );
  }
}

export default Team;
