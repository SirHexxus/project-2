import React, { Component } from 'react';

const initState = {
  name: '',
  email: '',
  message: ''
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

  render() {
    return (
      <div className='container'>
        <form onSubmit={this.handleSubmit}>
          <ul className='contact-form'>
            <h1 className='center'>Contact Us</h1>
            <li>
              <input
                type='text'
                id='name'
                onChange={this.handleChange}
                placeholder='Enter your name'
                value={this.state.name}
              />
            </li>
            <li>
              <input
                type='email'
                id='email'
                onChange={this.handleChange}
                placeholder='Please provide a valid email'
                value={this.state.email}
              />
            </li>
            <li>
              <textarea
                type='text-area'
                id='message'
                onChange={this.handleChange}
                placeholder='Enter message here'
                value={this.state.message}
              />
            </li>
          </ul>
        </form>
      </div>
    );
  }
}

export default Contact;
