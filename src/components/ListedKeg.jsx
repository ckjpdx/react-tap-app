import React from 'react';

function ListedKeg(props){
  return (
    <div>
      <hr/>
      <h3>{props.keg.name}</h3>
      <p>{props.keg.brand}</p>
      <p>{props.keg.price}</p>
      <p>{props.keg.alcoholContent}</p>
    </div>
  );
}

export default ListedKeg;
