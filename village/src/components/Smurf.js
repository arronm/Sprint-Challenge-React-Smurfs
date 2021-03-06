import React from 'react';
import { Route, Link } from 'react-router-dom'
import SmurfForm from './SmurfForm';

const Smurf = props => {

  const deleteSmurf = () => {
    props.deleteSmurf(props.id);
    props.history.push('/');
  }

  const editSmurf = (smurf) => {
    props.editSmurf({
      ...smurf,
      id: props.id,
    });
    props.history.push(`/smurf/${props.id}`);
  }

  return (
    <div className="Smurf">
      <h3>{props.name}</h3>
      <strong>{props.height} tall</strong>
      <p>{props.age} smurf years old</p>
      { props.editSmurf && <Link to={`/smurf/${props.id}/edit`}>Edit</Link> }
      { props.deleteSmurf && <input type="button" value="delete" onClick={deleteSmurf} /> }

      <Route
        path={`/smurf/${props.id}/edit`}
        render={
          (routerProps) => (
            <SmurfForm
              {...routerProps}
              refreshSmurfs={props.refreshSmurfs}
              handleOnSubmit={editSmurf}
            />
          )
        }
      />
    </div>
  );
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;

