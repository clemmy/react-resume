import React, { Component } from "react";
import Container from "../ui/Container";
import Sidebar from "./Sidebar";
import Main from "./Main";
import Header from "./Header";
import Footer from "./Footer";

class Resume extends Component {
  render() {
    return (
      <Container>
        <Header {...DATA.main} />
        <div style={{ display: "flex" }}>
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
      university: "University of Waterloo",
      duration: "Sept 2013 - Sept 2018",
      degree: "Bachelor of Software Engineering",
    },
    languages: [
      {
        name: "JavaScript/Node.js (ES2015)",
      },
      {
        name: "Python",
      },
      {
        name: "HTML/CSS",
      },
      {
        name: "Scala",
      },
      {
        name: "C++",
      },
      {
        name: "BASH",
      },
    ],
    databases: ["MongoDB", "Redshift/PostgreSQL", "MySQL"],
    libraries: [
      "React",
      "React Native",
      "Redux",
      "MobX",
      "Express",
      "Socket.io",
      "Koa",
      "Scrapy",
      "Gensim",
      "Scikit-Learn",
      "NLTK",
      "Django",
      "Angular",
      "Mocha",
      "jQuery",
      "Sass/Less",
    ],
    tools: [
      "AWS (Redshift, S3, Lambda, Kinesis, EMR, EC2, SES, SNS)",
      "Firebase",
      "Spark/Spark Streaming",
      "Airflow",
      "Jupyter",
      "Zeppelin",
      "Unix",
      "Git",
      "Webpack",
      "Gulp/Grunt",
      "Docker",
    ],
    interests: [
      "I <b>learn</b> about the web.",
      "I <b>dominate</b> in badminton, ping pong, and Tetris.",
      "I <b>love</b> tacos, anime, and traveling.",
      "I <b>hate</b> doing planks.",
    ],
    links: [
      {
        name: "Email",
        faClass: "fa fa-envelope",
        display: "me@clemmy.ninja",
        link: "mailto:me@clemmy.ninja",
      },
      {
        name: "GitHub",
        faClass: "fa fa-github",
        display: "github.com/clemmy",
        link: "https://github.com/clemmy",
      },
      {
        name: "Twitter",
        faClass: "fa fa-twitter",
        display: "twitter.com/c8hoang",
        link: "https://twitter.com/c8hoang",
      },
    ],
  },
  footerLinks: [
    {
      name: "Website",
      faClass: "fa fa-fire",
      display: "https://clemmy.ninja",
      link: "https://clemmy.ninja",
    },
    {
      name: "Blog",
      faClass: "fa fa-book",
      display: "clemmmy.medium.com",
      link: "https://clemmmy.medium.com/",
    },
    {
      name: "Linkedin",
      faClass: "fa fa-linkedin",
      display: "linkedin.com/in/clementhoang",
      link: "https://www.linkedin.com/in/clementhoang",
    },
  ],
  main: {
    firstName: "Clement",
    lastName: "Hoang",
    title: "Senior Software Engineer",
    website: {
      name: "https://clemmy.ninja",
      link: "https://clemmy.ninja",
    },
    companies: [
      {
        name: "Credit Karma",
        title: "Full Stack Engineer",
        color: "rgb(77, 100, 141)",
        date: "Jun 2018 - present",
        location: "Menlo Park, US",
        achievements: [
          "Led development of <b>high profile initiatives</b> including Credit Lock, Credit Health, Relief Roadmap, and Credit Card Debt Journey",
          "Cultivated team engineering culture that values <b>maintainability</b>, resulting in increased code and documentation quality",
          "Grew others by <b>mentoring</b> interns and junior engineers, facilitating engineering bootcamps, and conducting knowledge shares within the organization",
          'Collaborated with platform team to build <b>Containers</b>, a platform to create product experiences with faster time-to-market, and spoke about it at <b><a href="https://react.geekle.us/">React Geekle</a></b>',
        ],
      },
      {
        name: "Zoo House",
        title: "Co-founder & CTO",
        color: "rgb(77, 100, 141)",
        date: "Oct 2016 - Feb 2018",
        location: "Waterloo, CA",
        achievements: [
          'Managed team of 3 engineers to architect and ship <b><a href="https://freshline.io/">Freshline</a></b> MVP within timeline budget',
          "Participated in customer meetings to <b>negotiate</b> product requirements and pricing",
          "Designed, architected, and developed several <b>stealth apps</b> using React, React Native, Node, and various third-party data APIs",
        ],
      },
      {
        name: "Facebook",
        title: "Frontend Engineer Intern",
        color: "rgb(77, 100, 141)",
        date: "Sept 2017 - Dec 2017",
        location: "Menlo Park, US",
        achievements: [
          'Championed the release of <b><a href="https://reactjs.org/blog/2017/11/28/react-v16.2.0-fragment-support.html">React Fragments</a></b> with React v16.2',
          "Seamlessly integrated JSX fragments into the web ecosystem by submitting pull requests to open source libraries such as <b>Babel/Babylon</b> and reaching out to maintainers of popular Javascript libraries for collaboration",
          'Made proposals and prototypes for various forms of <b><a href="https://codepen.io/clemmy/pen/dZxObQ">JSX generator expressions</a></b>',
        ],
      },
      {
        name: "Memebox",
        title: "Data Engineer Intern",
        color: "rgb(77, 100, 141)",
        date: "Jan 2017 - Apr 2017",
        location: "Seoul, Korea",
        achievements: [
          "Built and maintained stable data pipelines built with <b>Spark</b> and <b>Spark Streaming</b>, with <b>Airflow</b> for scheduling (50+ GB data flow daily) running on AWS",
          "Created <b>real time</b> data visualization and alerting tools",
          "Architected a data extraction tool using <b>Scrapy</b> with efficient periodic refreshes for an external sites with thousands of pages.",
          "Extracted keywords for tagging beauty products based on reviews using <b>natural language processing</b> on Korean corpus",
        ],
      },
      {
        name: "Zenreach",
        title: "Frontend Engineer Intern",
        color: "rgb(77, 100, 141)",
        date: "May 2016 - Aug 2016",
        location: "React, Django, etc.",
        achievements: [
          'Spearheaded major migration initiative from v1 to v2 in <b><a href="https://github.com/zenoamaro/react-quill">react-quill</a></b> project with 1.3k stars on Github',
          "Designed and architected <b>event tracking</b> infrastructure, and built interactive tool to <b>visualize</b> this data, enabling data-driven product decisions.",
          "Built WYSIWIG drag & drop email composer using <b>React</b> with <b>Django</b>",
          
        ],
      },
      {
        name: "Datera",
        color: "rgb(77, 100, 141)",
        title: "Full Stack Engineer Intern",
        date: "Sept 2015 - Dec 2015",
        location: "Mountain View, US",
        achievements: [
          "Built an interactive API explorer using the JSONSchema standard with <b>AngularJS</b>",
          "Added core features to an in-house <b>Javascript</b> SPA framework including duplex streams for model access and <b>React</b> support",
          "Designed and built an admin panel for a distributed storage system",
        ],
      },
    ],
  },
};

export default Resume;
