import React, { Component } from 'react';
import Container from '../ui/Container';
import Sidebar from './Sidebar';
import Main from './Main';

class Resume extends Component {
  render() {
    return (
      <Container>
        <Sidebar data={DATA.sidebar} />
        <Main {...DATA.experience} />
      </Container>
    );
  }
}

const DATA = {
  sidebar: {
    name: 'Ramanpreet Nara',
    program: {
      term: '3A',
      nickname: 'softie',
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
    companies: [{
      name: 'Rangle.io',
      color: 'rgb(77, 100, 141)',
      title: 'Full Stack JavaScript Developer',
      projects: [{
        name: 'Sideboard',
        tools: ['ECMAScript 2015', 'Ramda', 'Immutable', 'Keen.io'],
        achievements: [
          'Designed an algorithm to aggregate Cycle Times using PivotalTracker APIs',
          'Coauthored a simple react + redux front-end, and a Koa.js back-end',
        ],
      }, {
        name: 'Project Augury',
        tools: ['TypeScript', 'Express', 'Mocha', 'Chai'],
        achievements: [
          'Used ResourceGuru APIs to implement Rangle.io\'s "vacation request form"',
          'Decoupled, tested, and modularized spaghetti server code',
        ],
      }, {
        name: 'Livefyre HTML Embed',
        tools: ['ECMAScript 2015', 'Webpack', 'Lodash'],
        achievements: [
          'Successfully led an architectural overhaul 3 weeks into 8 week long project',
          'Implemented cross-browser SVG animations to minimize embed size',
          'Collaborated with client engineers to find and fix faults in software',
        ],
      }],
    }, {
      name: 'Ntree',
      title: 'Angular JS Developer',
      color: 'rgb(77, 100, 141)',
      projects: [{
        name: 'SalesTree',
        tools: ['ECMAScript 2015', 'Angular', 'Broccoli', 'Gulp', 'Bootstrap'],
        achievements: [
          'Helped implement a responsive tablet interface using Bootstrap and LESS',
          'Created services to monitor user activities, and log client-side errors server-side',
          'Recreated the client-side build infrastructure using Broccoli to cut rebuild time by 90%',
        ],
      }],
    }, {
      name: 'Ontario Ministry of Government Services',
      title: 'Interactive Developer',
      color: 'rgb(77, 100, 141)',
      achievements: [
        'Built and provisioned Vagrant development environments for four projects',
        'Implemented query caching on the Premier\'s website, cutting load-times in half',
        'Secured a legacy PHP application by removing dependency on old, deprecated, and unsafe PHP APIs',
      ],
    }],
  },
};

export default Resume;
