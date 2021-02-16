import React, { Component } from 'react';

class Form extends Component {
  state = {
    profilePhoto: '',
    myName: '',
    post: '',
  };

  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    return (
      <Form>
        <input type="File" name="profilePhoto" value={this.state.profilePhoto}>
          Upload your profile picture
        </input>
        <input
          name="myName"
          placeholder="your name"
          value={this.state.myName}
          onChange={this.handleInputChange}
        />
        <input type="File" name="post" value={this.state.post}>
          Upload your post picture
        </input>
      </Form>
    );
  }
}

export default Form;
