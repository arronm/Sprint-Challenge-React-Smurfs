import React, { Component } from 'react';
import axios from 'axios';
import { Route, NavLink } from 'react-router-dom';


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
        <div className="navigation">
          <NavLink activeClassName="selected" exact to="/">Smurf Village</NavLink>
          <NavLink activeClassName="selected" to="/smurf-form">Smurf Form</NavLink>
        </div>
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
