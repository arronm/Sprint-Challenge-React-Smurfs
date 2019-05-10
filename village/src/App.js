import React, { Component } from 'react';
import axios from 'axios';
import { Route } from 'react-router-dom';

import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
    };
  }
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    axios.get('http://localhost:3333/smurfs')
      .then(
        res => {
          this.setState({
            smurfs: res.data,
          });
        }
      ).catch(
        error => {
          console.log(`This request smurf'd up: ${error}`);
        }
      );
  }

  render() {
    return (
      <div className="App">
        <Route
          path="/"
          exact
          render={(props) => <Smurfs {...props} smurfs={this.state.smurfs} />}
        />
        <Route
          path="/smurf-form"
          render={(props) => <SmurfForm {...props} getData={this.getData} />}
        />
      </div>
    );
  }
}

export default App;
