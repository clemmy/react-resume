import React, { Component } from 'react';
import Container from '../ui/Container';
import Sidebar from './Sidebar';
import MainContent from './MainContent';

class Resume extends Component {
  render() {
    return (
      <Container>
        <Sidebar data={DATA.sidebar} />
        <MainContent data={DATA.experience} />
      </Container>
    );
  }
}

const DATA = {
  sidebar: {
    name: 'Ramanpreet Nara',
    program: {
      term: '3A',
      nickname: 'Softie',
      name: 'Software Engineering',
    },
    languages: [{
      name: 'JavaScript',
      proficiency: 0.8,
    }, {
      name: 'C++',
      proficiency: 0.6,
    }, {
      name: 'CSS',
      proficiency: 0.6,
    }, {
      name: 'Clojure',
      proficiency: 0.4,
    }, {
      name: 'HTML',
      proficiency: 0.75,
    }, {
      name: 'PHP',
      proficiency: 0.4,
    }, {
      name: 'BASH',
      proficiency: 0.3,
    }],
    frameworks: [
      'Node.js',
      'Redux',
      'Express',
      'Koa.js',
      'Angular',
      'Ember',
      'Sails',
      'SCRUM',
      'React',
    ],
    tools: [
      'Unix CLI',
      'PivotalTracker',
      'Git',
      'Webpack',
      'Gulp',
      'Broccoli',
      'MongoDB',
      'Redis',
    ],
  },
  experience: {
    work: {
      recent: {
        projects: [{
          name: 'Sideboard',
          achievements: [
            'Designed algorithm to calculate project Cycle Times using PivotalTracker\'s APIs, and Keen.io',
            'Coauthored a simple react + redux front-end, and a Koa.js back-end',
            'Used frequently by SCRUM Masters and CTO to monitor the health of all Rangle.io projects',
          ],
        }, {
          name: 'Project Augury',
          achievements: [
            'Interfaced with ResourceGuru\'s API\'s to implement a vacation request form',
            'Decoupled, tested, and modularized spaghetti server code',
          ],
        }, {
          name: 'Livefyre HTML Embed',
          achievements: [
            'Successfully led an architectural overhaul 3 weeks into the (8 week long) project',
            'Implemented cross-browser SVG animations to minimize embed size',
            'Coordinated with client engineers to find and fix faults in software',
          ],
        }],
      },
    },
  },
};

export default Resume;
