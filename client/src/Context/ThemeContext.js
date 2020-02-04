import React, { createContext, Component } from "react";

const images = require.context("../Images", true);

export const ThemeContext = createContext();

class ThemeContextProvider extends Component {
  state = {
    isLightTheme: true,
    light: {
      text: "black",
      uitext: "white",
      ui: "black",
      bgc: "white",
      title: images("./Title.png"),
      bgImage: images("./bodybg.png"),
      name: "Dark Mode"
    },
    dark: {
      text: "#667",
      uitext: "black",
      ui: "white",
      bgc: "#000",
      title: images("./DarkModeTitle.png"),
      bgImage: images("./bodybg.png"),
      name: "Light Mode"
    }
  };

  toggleTheme = e => {
    e.preventDefault();
    this.setState({ isLightTheme: !this.state.isLightTheme });
    this.state.isLightTheme
      ? (document.body.style.backgroundColor = "black")
      : (document.body.style.backgroundColor = "white");
  };

  render() {
    return (
      <ThemeContext.Provider
        value={{ ...this.state, toggleTheme: this.toggleTheme }}
      >
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}

export default ThemeContextProvider;
