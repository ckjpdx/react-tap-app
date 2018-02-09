import React from 'react';
import NewKeg from './NewKeg';
import UseKeg from './UseKeg';
import DeleteKeg from './DeleteKeg';
import ListedKeg from './ListedKeg';

let kegListArray = [
  {
    name: 'GingaNinja',
    brand: 'Two Towns',
    price: '3.50',
    alcoholContent: '5.2'
  },
  {
    name: 'Nights of Chris-Lumbus',
    brand: 'Geno-Ciders',
    price: '6.50',
    alcoholContent: '7.5'
  },
  {
    name: 'Over Hopulation',
    brand: 'Barley Brown\'s Beer',
    price: '6.00',
    alcoholContent: '8.5'
  },
  {
    name: 'Black (黑)',
    brand: 'Mikkeller',
    price: '9.00',
    alcoholContent: '17.5'
  }
];

function KegList(){
  return (
    <div>
      <h1>KegList</h1>
      {kegListArray.map((keg, i) => <ListedKeg keg={keg} i={i}/> )}
      <NewKeg/>
      <UseKeg/>
      <DeleteKeg/>
    </div>
  );
}

export default KegList;
