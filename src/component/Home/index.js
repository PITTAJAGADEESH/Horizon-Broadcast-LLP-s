import React, { Component } from "react";
import Menu from "../Menu";
import Header from "../Header";
import { Languages } from "../Languages";
import "./index.css";

class Home extends Component {
  state = {
    language: "en",
  };

  handleLanguageChange = (event) => {
    this.setState({ language: event.target.value });
  };

  render() {
    const { language } = this.state;
    const menuItems = Languages[language];

    return (
      <div>
        <Header onLanguageChange={this.handleLanguageChange} />
        <Menu menuItems={menuItems} />
      </div>
    );
  }
}

export default Home;
