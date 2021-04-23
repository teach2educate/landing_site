import React, { Component } from 'react';

class Team extends Component {
  render() {
    return (
      <section id="team_culture">
        <br></br>
        <div className="row education">
          <div className="three columns header-col">
            <img className="profile-pic" src="images/ravi.png" alt="Ravi Raju" />
          </div>

          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">
                <div key="School"><h3><a href="https://www.linkedin.com/in/ravirajuk/">Ravi Raju Krishna</a></h3>
                  <p className="info">Co-Founder</p>
                  <ul>
                    <li><span>&bull;</span> Ravi worked as Software Engineer @ <a href="https://www.infinera.com/">Infinera</a>, shouldering various SDLC responsibilities. </li>
                    <li><span>&bull;</span> Pursued his Masters in Computer Science @ <a href="https://www.usc.edu/">USC</a> and worked as a Data Scientist @ <a href="https://scryanalytics.ai/">Scry Analytics</a> and Interned for edTech startup @ <a href="https://www.kidaptive.com/">Kidaptive</a>. </li>
                    <li><span>&bull;</span> Empowered with the exposure to modern educational practices adopted in US universities and hands on Full Stack Data Scientist, he decided to return back to India and make a difference in our education system. </li>
                    <li><span>&bull;</span> He has been volunteering @ <a href="https://www.evidyaloka.org/">eVidyaLoka</a>, teaching English to government school students, and experimenting various strategies to improve student engagement. </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br></br>
        <div className="row education">
          <div className="three columns header-col">
            <img className="profile-pic" src="images/vikas.png" alt="Vikas Badami" />
          </div>

          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">
                <div key="School"><h3><a href="https://www.linkedin.com/in/vikasbadami/">Vikas Badami</a></h3>
                  <p className="info">Co-Founder</p>
                  <ul>
                    <li><span>&bull;</span>  Vikas is a young entrepreneur whose passion for quality education has been fuel for his first socio-educational initiative, <a href="https://scicopath.com/">Scicopath</a> to grow exponentially, addressing over 10000+ students from over 25 institutes, all within a year.</li>
                    <li><span>&bull;</span>  With 3+ years in teaching and having taught the likes of PhD and M Tech students from top tier institutes including NITs, he was listed among the top 21 global scholars for the <a href="https://www.youtube.com/watch?v=BCNopIfGTio">School of AI Fellowship</a> in Italy in 2019 and by far, the youngest person to be honoured here. </li>
                    <li><span>&bull;</span>  He has been part of <a href="https://plaksha.org/">Tech Leaders Fellowship</a>, <a href="https://www.jagritiyatra.com/">Jagriti Yatra</a>, UC Berkeley's <a href="https://www.globalventurecatalyst.org/">Global Venture Catalyst</a> and Harvard US India Initiative and has declined offers of technical roles at Indian Air Force, PhD from IIT-K and job offer from top MNCs to bring Teach2Educate alive.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br></br>
      </section>
    );
  }
}

export default Team;
