import React, { Component } from 'react';
import Container from '../ui/Container';
import Sidebar from './Sidebar';
import Main from './Main';
import Header from './Header';
import Footer from './Footer';

class Resume extends Component {
  render() {
    return (
      <Container>
        <Header />
        <div style={{ display: 'flex' }}>
          <Main {...DATA.main} />
          <Sidebar data={DATA.sidebar} />
        </div>
        <Footer />
      </Container>
    );
  }
}

const DATA = {
  sidebar: {
    education: {
      university: 'University of Waterloo',
      duration: 'Sept 2013 - now',
    },
    languages: [{
      name: 'JavaScript',
      proficiency: 0.8,
    }, {
      name: 'Clojure',
      proficiency: 0.4,
    }, {
      name: 'C++',
      proficiency: 0.6,
    }, {
      name: 'HTML',
      proficiency: 0.75,
    }, {
      name: 'PHP',
      proficiency: 0.4,
    }, {
      name: 'CSS',
      proficiency: 0.6,
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
    links: [{
      name: 'Phone',
      display: '1-647-609-4290',
      link: 'tel:+16576094290',
    }, {
      name: 'Email',
      display: 'rsnara@uwaterloo.ca',
      link: 'mailto:rsnara@uwaterloo.ca',
    }, {
      name: 'CodePen',
      display: 'rsnara',
      link: 'http://codepen.io',
    }, {
      name: 'GitHub',
      display: 'noodlemaster',
      link: 'https://github.com/noodlemaster',
    }],
  },
  main: {
    name: 'Ramanpreet Nara',
    program: {
      term: '3A',
      nickname: 'Software Engineering',
      name: 'Software Engineering',
    },
    interests: [
      'Following technological advancements; scripting; digital art; Project Euler',
      'Exploring the mysterious arts of the JavaScript ninja',
      'Over-engineering resumes using React',
    ],
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
      tools: ['Redux', 'Radium', 'Immutable', 'BASSCSS', 'Ramda'],
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
