import React, { Component } from "react";
import Container from "../ui/Container";
import Sidebar from "./Sidebar";
import Main from "./Main";
import Header from "./Header";
import Footer from "./Footer";
import DATA from '../data'

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

export default Resume;
