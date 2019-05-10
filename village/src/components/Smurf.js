import React from 'react';

const Smurf = props => {

  const deleteSmurf = () => {
    props.deleteSmurf(props.id);
  }

  const editSmurf = () => {
    console.log('edit');
  }

  return (
    <div className="Smurf">
      <h3>{props.name}</h3>
      <strong>{props.height} tall</strong>
      <p>{props.age} smurf years old</p>
      { props.editSmurf && <input type="button" value="edit" onClick={editSmurf} /> }
      { props.deleteSmurf && <input type="button" value="delete" onClick={deleteSmurf} /> }
    </div>
  );
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;

