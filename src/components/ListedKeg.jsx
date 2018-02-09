import React from 'react';
import PropTypes from 'prop-types';

function ListedKeg(props){
  return (
    <div>
      <hr/>
      <h3>{props.i + 1}. {props.keg.name}</h3>
      <p>by {props.keg.brand}</p>
      <p>$ {props.keg.price}</p>
      <p>{props.keg.alcoholContent} %</p>
    </div>
  );
}

ListedKeg.propTypes = {
  keg: PropTypes.object.isRequired,
  i: PropTypes.number.isRequired
};

export default ListedKeg;
