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
        <AddKegForm onAddKegSubmit={this.handleAddKegSubmit} />
        <h1>KegList</h1>
        {Object.keys(this.state.masterKegList).map((kegId) => {
          let keggy = this.state.masterKegList[kegId];
          return <ListedKeg keg={keggy} i={kegId} key={kegId} />;
        })}
      </div>
    );
  }
}

export default KegList;
