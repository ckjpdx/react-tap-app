import React from 'react';
import AddKegForm from './AddKegForm';
import ListedKeg from './ListedKeg';
import v4 from 'uuid';

class KegList extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      masterKegList: {
        0: {
          name: 'GingaNinja',
          brand: 'Two Towns',
          price: '3.50',
          alcoholContent: '5.2'
        }
      }
    };
    this.handleAddKegSubmit = this.handleAddKegSubmit.bind(this);
  }

  handleAddKegSubmit(kegToAdd) {
    let newKegId = v4();
    let newMasterKegList = Object.assign({}, this.state.masterKegList, {
      [newKegId]: kegToAdd
    });
    this.setState({masterKegList: newMasterKegList});
  }

  render(){
    return (
      <div>
        <style jsx>{`

          `}</style>
        <h1>KegList</h1>
        {Object.keys(this.state.masterKegList).forEach(kegId => {
          let keg = this.state.masterKegList[kegId];
          console.log(keg);
          console.log(kegId);
          return <ListedKeg keg={keg} key={kegId} i={kegId} />;
        })}
      </div>
    );
  }
}

export default KegList;
