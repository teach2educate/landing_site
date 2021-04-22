import React, { Component } from 'react';

class Team extends Component {
  render() {
    return (
      <section id="team_culture">
        <div className="row education">
          <div className="three columns header-col">
            <img className="profile-pic" src="images/ravi.png" alt="Ravi Raju" />
          </div>

          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">
                <div key="School"><h3>Ravi Raju Krishna</h3>
                  <p className="info">Co-Founder</p>
                  <ul>
                    <li><span>&bull;</span>  Ravi started his experiential learning journey as a Software Engineer @ Infinera, shouldering various SDLC responsibilities for 4 years. </li>
                    <li><span>&bull;</span>  His passion for making a difference in Indian Education System, drove him to pursue Masters in Comp Sc @ USC. While upskilling in Data Science, he experienced the modern educational practices adopted in US universities.</li>
                    <li><span>&bull;</span>  He further worked as Data Scientist for FinTech startup - Scry Analytics, and an Independent Contractor for EdTech startup - Kidaptive.</li>
                    <li><span>&bull;</span>  He has been volunteering @ eVidyaLoka, teaching English to government school students, experiencing the pain points of a teacher and experimenting with various active learning strategies to improve student engagement.</li>
                    <li><span>&bull;</span>  Armed with these skills, Ravi chose to return back to India to work in edTech industry enabling equal access to quality education.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div className="row education">
          <div className="three columns header-col">
          <img className="profile-pic" src="images/vikas.png" alt="Vikas Badami" />
          </div>

          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">
                <div key="School"><h3>Vikas Badami</h3>
                  <p className="info">Co-Founder</p>
                  <ul>
                    <li><span>&bull;</span>  Vikas is a young entrepreneur whose passion for quality education has been fuel for his first socio-educational initiative, Scicopath to grow exponentially, addressing over 10000+ students from over 25 institutes, all within a year.</li>
                    <li><span>&bull;</span>  With 3+ years in teaching and having taught the likes of PhD and M Tech students from top tier institutes including NITs, he was listed among the top 21 global scholars for the School of AI Fellowship in Italy in 2019 and by far, the youngest person to be honoured here. </li>
                    <li><span>&bull;</span>  He has been part of Tech Leaders Fellowship, Jagriti Yatra, UC Berkeley's Global Venture Catalyst and Harvard US India Initiative and has declined offers of technical roles at Indian Air Force, PhD from IIT-K and job offer from top MNCs to bring Teach2Educate alive.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Team;
