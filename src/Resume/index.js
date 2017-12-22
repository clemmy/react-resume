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
        <Header {...DATA.main} />
        <div style={{ display: 'flex' }}>
          <Main {...DATA.main} />
          <Sidebar data={DATA.sidebar} />
        </div>
        <Footer links={DATA.footerLinks} />
      </Container>
    );
  }
}

const DATA = {
  sidebar: {
    education: {
      university: 'University of Waterloo',
      duration: 'Sept 2013 - now',
      degree: 'Bachelor of Software Engineering',
    },
    languages: [
      {
        name: 'JavaScript/Node.js (ES2015)',
        proficiency: 0.8,
      },
      {
        name: 'Python',
        proficiency: 0.7,
      },
      {
        name: 'HTML/CSS',
        proficiency: 0.4,
      },
      {
        name: 'Scala',
        proficiency: 0.6,
      },
      {
        name: 'C++',
        proficiency: 0.6,
      },
      {
        name: 'BASH',
        proficiency: 0.5,
      },
    ],
    databases: ['MongoDB', 'Redshift/PostgreSQL', 'MySQL'],
    libraries: [
      'React',
      'React Native',
      'Redux',
      'MobX',
      'Express',
      'Socket.io',
      'Koa',
      'Scrapy',
      'Gensim',
      'Scikit-Learn',
      'NLTK',
      'Django',
      'Angular',
      'Mocha',
      'jQuery',
      'Sass/Less',
    ],
    tools: [
      'AWS (Redshift, S3, Lambda, Kinesis, EMR, EC2, SES, SNS)',
      'Firebase',
      'Spark/Spark Streaming',
      'Airflow',
      'Jupyter',
      'Zeppelin',
      'Unix',
      'Git',
      'Webpack',
      'Gulp/Grunt',
      'Docker',
    ],
    interests: [
      'I <b>learn</b> about web and startups.',
      'I <b>dominate</b> in baddy, ping pong, League of Legends, and Tetris.',
      'I <b>love</b> tacos, anime, bubble tea, fitness, traveling, and team players.',
      'I <b>hate</b> doing planks.',
    ],
    links: [
      {
        name: 'Email',
        faClass: 'fa fa-envelope',
        display: 'c8hoang@uwaterloo.ca',
        link: 'mailto:c8hoang@uwaterloo.ca',
      },
      {
        name: 'GitHub',
        faClass: 'fa fa-github',
        display: 'github.com/clemmy',
        link: 'https://github.com/clemmy',
      },
      {
        name: 'Twitter',
        faClass: 'fa fa-twitter',
        display: 'twitter.com/c8hoang',
        link: 'https://twitter.com/c8hoang',
      },
    ],
  },
  footerLinks: [
    {
      name: 'Website',
      faClass: 'fa fa-fire',
      display: 'http://clemmy.ninja',
      link: 'http://clemmy.ninja',
    },
    {
      name: 'Blog',
      faClass: 'fa fa-book',
      display: 'blog.clementhoang.net',
      link: 'http://blog.clementhoang.net',
    },
    {
      name: 'Linkedin',
      faClass: 'fa fa-linkedin',
      display: 'linkedin.com/in/clementhoang',
      link: 'https://www.linkedin.com/in/clementhoang',
    },
  ],
  main: {
    firstName: 'Clement',
    lastName: 'Hoang',
    program: {
      term: '',
      nickname: 'Software Engineer',
      name: 'Software Engineer',
    },
    website: {
      name: 'http://clemmy.ninja',
      link: 'http://clemmy.ninja',
    },
    companies: [
      {
        name: 'Facebook',
        title: 'React Core Developer',
        color: 'rgb(77, 100, 141)',
        date: 'Fall 2017',
        location: 'Menlo Park, US',
        achievements: [
          'Championed the release of <b><a href="https://reactjs.org/blog/2017/11/28/react-v16.2.0-fragment-support.html">React Fragments</a></b> with React v16.2',
          'Prepared ecosystem for JSX fragments by submitting pull requests to open source libraries such as <b>Babel/Babylon</b> and reaching out to maintainers of popular Javascript libraries for collaboration',
          'Made proposals and prototypes for various forms of <b>JSX</b> generator expressions,',
        ],
      },
      {
        name: 'Memebox',
        title: 'Data Engineer',
        color: 'rgb(77, 100, 141)',
        date: 'Winter 2017',
        location: 'Seoul, Korea',
        achievements: [
          'Maintained stable data pipelines built with <b>Spark</b> and <b>Spark Streaming</b>, with <b>Airflow</b> for scheduling (50+ GB data flow daily)',
          'Built <b>real time</b> data visualization and alerting tools',
          'Wrote data extraction tool for external sites using <b>Scrapy</b> that automatically refreshes for stale data periodically',
          'Extracted keywords from Korean text for tagging products',
        ],
      },
      {
        name: 'Zenreach',
        title: 'Web Developer',
        color: 'rgb(77, 100, 141)',
        date: 'Spring 2016',
        location: 'San Francisco, US',
        achievements: [
          'Contributed major updates to <b><a href="https://github.com/zenoamaro/react-quill">react-quill</a></b> project with 1.3k stars on Github',
          'Created interactive visualizations for customer data, improving browser coverage to over <b>99%</b>',
          'Built drag & drop email composer using <b>React</b> with <b>Django</b>, with event tracking infrastructure and behavioural analytics',
        ],
      },
      {
        name: 'Datera',
        color: 'rgb(77, 100, 141)',
        title: 'Full Stack JavaScript Engineer',
        date: 'Fall 2015',
        location: 'Mountain View, US',
        achievements: [
          'Built interactive API explorer using the JSONSchema standard with <b>AngularJS</b>',
          'Added core features to an in-house <b>Javascript</b> SPA framework including duplex streams for model access and <b>React</b> support',
          'Designed and built admin panel for a distributed storage system',
        ],
      },
    ],
    projects: [
      {
        name: 'Zoo House',
        tools: [],
        achievements: [
          'Helped clients build fully fledged products such as <b><a href="https://www.coastlinemarket.com/">Coastline Market</a></b>, e-commerce and inventory management for fishing',
          'Worked with a small team to build and maintain <b><a href="https://luql.io/">Luql</a></b>, a platform for local tour guides',
        ],
      },
      {
        name: 'Various Hacks',
        tools: [],
        achievements: [
          '<b><a href="http://www.hackathon.io/pokidex">Pokidex</a></b> - mobile app where users can easily view important insurance data (Winner at AngelHack Silicon Valley 2016)',
          '<b><a href="http://devpost.com/software/query-sctlva">Query</a></b> - pebble and web app that provide a real-time collaborative classroom layer on top of a lecture (Winner at HackingEDU 2015)',
          '<b><a href="https://devpost.com/software/amusement-um9im">Amusement</a></b> - app that keeps your analyzes your mental state while driving and keeps it healthy via controlling your music playlist (Winner at HackWestern 2015)',
          '<b><a href="https://twitter.com/SpaceAppsTO/status/587444439276191744">LookUp</a></b> - iOS and pebble app that displays live feed of transient space events (Winner at NASA Space Apps Toronto 2015)',
        ],
      },
    ],
  },
};

export default Resume;
