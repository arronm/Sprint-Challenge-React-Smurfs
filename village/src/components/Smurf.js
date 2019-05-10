import React from 'react';

const Smurf = props => {

  const deleteSmurf = () => {
    props.deleteSmurf(props.id);
  }

  console.log(props);

  return (
    <div className="Smurf">
      <h3>{props.name}</h3>
      <strong>{props.height} tall</strong>
      <p>{props.age} smurf years old</p>
      <input type="button" value="delete" onClick={deleteSmurf} />
    </div>
  );
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;

