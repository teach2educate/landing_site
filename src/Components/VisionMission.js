import React, { Component } from 'react';
import { Section } from './styled';
class VisionMission extends Component {
  render() {
    return (
      <Section id="visionMission">
        <div className="deck">
          <div className="card">
            <div className="face">
              <h1><span role="img" aria-label="mission">🧗🏻‍♂️</span> Mission</h1>
              <p>
                Join us in our mission to democratise education by delivering
                access to Quality Education to every child enrolled in schools,
                by facilitating student-teacher interactions to improve their
                efficiency of knowledge exchange via shared learning and
                multiple learning paths.
              </p>
            </div>
          </div>
          <div className="card">
            <div className="face">
              <h1><span role="img" aria-label="vision">⛳</span> Vision</h1>
              <p>
                We have a dream to create a world where education is not a
                business limited to securing good marks in schools, but one,
                whose purpose is to promote 21st-century skills such as critical
                thinking, communication, collaboration in each student to become
                lifelong learners.
              </p>
            </div>
          </div>
        </div>
      </Section>
    );
  }
}

export default VisionMission;
