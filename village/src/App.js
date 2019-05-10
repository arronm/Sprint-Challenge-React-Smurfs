import React, { Component } from 'react';
import axios from 'axios';
import { Route, NavLink } from 'react-router-dom';


import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import Smurf from './components/Smurf';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
    };
  }

  componentDidMount() {
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

  refreshSmurfs = (smurfs) => {
    this.setState({
      smurfs: smurfs
    });
  }

  getSmurfById = (id) => {
    return this.state.smurfs.filter(smurf => {
      return smurf.id === parseInt(id, 10)
    })[0];
  }

  handleDeleteSmurf = id => {
    axios.delete(`http://localhost:3333/smurfs/${id}`)
      .then(
        res => {
          this.refreshSmurfs(res.data)
        }
      )
      .catch(
        error => {
          console.log(`This request smurf'd up: ${error}`);
        }
      );
  }

  handleEditSmurf = id => {
    console.log("do the thing");
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
          render={(props) => <Smurfs {...props} smurfs={this.state.smurfs} deleteSmurf={this.handleDeleteSmurf} />}
        />
        <Route
          path="/smurf/:id"
          render={(routeProps) => (
            <Smurf
              {...routeProps}
              {...this.getSmurfById(routeProps.match.params.id)}
              deleteSmurf={this.handleDeleteSmurf}
              editSmurf={this.handleEditSmurf}
            />
          )}
        />
        <Route
          path="/smurf-form"
          render={(props) => <SmurfForm {...props} refreshSmurfs={this.refreshSmurfs} />}
        />
      </div>
    );
  }
}

export default App;
