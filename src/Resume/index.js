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
      nickname: 'Software Engineering',
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
      'Koa',
      'Angular',
      'Ember',
      'Sails',
      'SCRUM',
      'Mocha',
    ],
    libraries: [
      'React',
      'Ramda',
      'Immutable',
      'Chai',
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
          'Coauthored a simple React + Redux front-end, and a Koa.js back-end',
        ],
      }, {
        name: 'Project Augury',
        tools: ['TypeScript', 'Express', 'Mocha', 'Chai'],
        achievements: [
          'Used ResourceGuru APIs to implement Rangle.io\'s Vacation Request Form',
          'Decoupled, tested, and modularized spaghetti server code',
        ],
      }, {
        name: 'Livefyre HTML Embed',
        tools: ['ECMAScript 2015', 'DOM', 'SVG', 'Webpack'],
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
          'Helped implement a responsive tablet interface using Bootstrap, and LESS',
          'Created services to monitor user activities and log client-side errors server-side',
          'Recreated client-side build infrastructure using Broccoli, cutting rebuild times by more than 75%',
        ],
      }],
    }, {
      name: 'Ontario Ministry of Govt. Services',
      title: 'Interactive Developer',
      color: 'rgb(77, 100, 141)',
      achievements: [
        'Built and provisioned Vagrant development environments for four projects',
        'Halved load times on the Premier\'s website by implementing query caching',
        'Refactored authentication on a legacy PHP app, switching from MD5 to BCrypt',
      ],
    }],
    projects: [{
      name: 'LOLQueen - League of Legends',
      tools: ['Redux', 'Radium', 'Immutable', 'BASSCSS', 'ramda'],
      link: 'http://lolqueen.net',
      achievements: [
        'Authored utilities to query RIOT\'s APIs that seamlessly handle rate limiting',
        'Built a React + Redux front-end to display Summoner Match history',
      ],
    }, {
      name: 'CVAS - HTML5 Canvas Hack',
      tools: ['Socket.io', 'Express'],
      link: 'http://cvas.herokuapp.com',
      achievements: [
        'Used message passing to keep canvas state efficiently in sync between users',
      ],
    }],
  },
};

export default Resume;
