import React, { Component } from 'react';
import axios from 'axios';

class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      height: ''
    };
  }

  handleOnSubmit = event => {
    event.preventDefault();
    this.props.handleOnSubmit({...this.state});
    this.setState({
      name: '',
      age: '',
      height: '',
    });
  }

  addSmurf = event => {
    event.preventDefault();
    axios.post('http://localhost:3333/smurfs', {...this.state})
      .then(
        res => {
          this.props.refreshSmurfs(res.data);
        }
      )
      .catch(
        error => {
          console.log(`This request done smurf'd up: ${error}`);
        }
      );

    this.setState({
      name: '',
      age: '',
      height: ''
    });
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="SmurfForm">
        <form onSubmit={this.handleOnSubmit}>
          <input
            onChange={this.handleInputChange}
            placeholder="name"
            value={this.state.name}
            name="name"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="age"
            value={this.state.age}
            name="age"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="height"
            value={this.state.height}
            name="height"
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default SmurfForm;
