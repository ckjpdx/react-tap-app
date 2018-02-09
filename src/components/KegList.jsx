import React from 'react'; // always import core React library
import NewKeg from './NewKeg';
import UseKeg from './UseKeg';
import DeleteKeg from './DeleteKeg';

function KegList(){
  return (
    <div>
      <h1>KegList</h1>
      <NewKeg/>
      <UseKeg/>
      <DeleteKeg/>
    </div>
  );
}

export default KegList;
