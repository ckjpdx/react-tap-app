import React from 'react';
import PropTypes from 'prop-types';

function ListedKeg(props){
  return (
    <div id='keg-card'>
      <style jsx>{`
        #keg-card {
          width: 90%;
          border: 1px solid black;
          border-radius: 10px;
          margin: 10px auto;
        }
      `}</style>
      <hr/>
      <h3>{props.i}. {props.keg.name}</h3>
      <p>by {props.keg.brand}</p>
      <p>$ {props.keg.price}</p>
      <p>abv: {props.keg.alcoholContent} %</p>
    </div>
  );
}

ListedKeg.propTypes = {
  keg: PropTypes.object.isRequired,
  i: PropTypes.string.isRequired
};

export default ListedKeg;
