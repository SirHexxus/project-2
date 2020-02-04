import React, { Component } from "react";
import { ThemeContext } from "../../Context/ThemeContext";
const initState = {
  name: "",
  email: "",
  message: ""
};
class Contact extends Component {
  state = initState;

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
    console.log(this.state);
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
  };

  static contextType = ThemeContext;

  render() {
    const { isLightTheme, light, dark } = this.context;
    const theme = isLightTheme ? light : dark;
    return (
      <div className='container'>
        <div className='container center'>
          <h1 className='center form-header'>Contact Us</h1>
          <form
            className='border'
            onSubmit={this.handleSubmit}
            style={{ backgroundColor: theme.bgc }}
          >
            <input
              type='text'
              id='name'
              onChange={this.handleChange}
              placeholder='Enter your name'
              value={this.state.name}
            />

            <input
              type='email'
              id='email'
              onChange={this.handleChange}
              placeholder='Please provide a valid email'
              value={this.state.email}
            />

            <textarea
              type='text-area'
              id='message'
              onChange={this.handleChange}
              placeholder='Enter message here'
              value={this.state.message}
            />

            <button
              className='btn center'
              style={{ backgroundColor: "#5558aa" }}
              onClick={this.onSignUp}
            >
              Send message
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Contact;
