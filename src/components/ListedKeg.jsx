import React from 'react';
import PropTypes from 'prop-types';

function ListedKeg(props){
  function handleKegDelete(){
    props.onKegDelete(props.id);
  }
  function handlePour(){
    props.onPour(props.id);
  }
  
  return (
    <div id='keg-card'>
      <style jsx>{`
        #keg-card {
          width: 90%;
          border: 2px solid black;
          border-radius: 10px;
          margin: 10px auto;
          background: red;
        }
      `}</style>
      <h3>{props.i + 1}. {props.keg.name}</h3>
      <p>ID: {props.id}</p>
      <p>by {props.keg.brand}</p>
      <p>$ {props.keg.price}</p>
      <p>abv: {props.keg.alcoholContent} %</p>
      <p>volume: {props.keg.volume} pt(s)</p>
      <button onClick={handleKegDelete}>Delete</button>
      <button onClick={handlePour}>Pour</button>
    </div>
  );
}

ListedKeg.propTypes = {
  keg: PropTypes.object.isRequired,
  i: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
  onKegDelete: PropTypes.func.isRequired,
  onPour: PropTypes.func.isRequired
};

export default ListedKeg;
