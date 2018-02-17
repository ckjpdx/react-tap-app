import React from 'react';
import AddKegForm from './AddKegForm';
import ListedKeg from './ListedKeg';
import EditDetail from './EditDetail';

class KegList extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      masterKegList: {
        0: {
          name: 'Aphix Twin',
          brand: 'Two Towns',
          price: '4.50',
          alcoholContent: '5.2',
          volume: 10
        },
        1: {
          name: 'Hop-lite',
          brand: 'Mount Olympia',
          price: '5.00',
          alcoholContent: '6.4',
          volume: 10
        }
      },
      selectedDetail: {}
    };
    this.handleAddKegSubmit = this.handleAddKegSubmit.bind(this);
    this.handleKegDelete = this.handleKegDelete.bind(this);
    this.handlePour = this.handlePour.bind(this);
    this.handleDetailToEdit = this.handleDetailToEdit.bind(this);
    this.handleUpdateDetail = this.handleUpdateDetail.bind(this);
  }

  handleAddKegSubmit(uuid, kegToAdd) {
    let newMasterKegList = Object.assign({}, this.state.masterKegList, {
      [uuid]: kegToAdd
    });
    this.setState({masterKegList: newMasterKegList});
  }

  handleKegDelete(kegId){
    let newMasterKegList = Object.assign({}, this.state.masterKegList);
    delete newMasterKegList[kegId];
    this.setState({masterKegList: newMasterKegList});
  }

  handlePour(kegId) {
    let newMasterKegList = Object.assign({}, this.state.masterKegList);
    const kegPoured = newMasterKegList[kegId];
    if (kegPoured.volume > 0) {
      kegPoured.volume--;
    }
    if (kegPoured.volume <= 0){
      kegPoured.name = 'EMPTY';
    }
    this.setState({masterKegList: newMasterKegList});
  }

  handleDetailToEdit(detailFromOnClick){
    this.setState({selectedDetail: detailFromOnClick});
  }

  handleUpdateDetail(newDetail){
    const selector = this.state.selectedDetail;
    let newMasterKegList = Object.assign({}, this.state.masterKegList);
    newMasterKegList[selector.id][selector.detail] = newDetail;
    this.setState({masterKegList: newMasterKegList});
  }

  render(){
    return (
      <div>
        <AddKegForm onAddKegSubmit={this.handleAddKegSubmit} />
        <h1>KegList</h1>
        {Object.keys(this.state.masterKegList).map((kegId, index) => {
          let keg = this.state.masterKegList[kegId];
          return <ListedKeg
            keg={keg}
            i={index}
            id={kegId}
            key={kegId}
            onKegDelete={this.handleKegDelete}
            onPour={this.handlePour}
            onDetailToEdit={this.handleDetailToEdit} />;
        })}
        <EditDetail onUpdateDetail={this.handleUpdateDetail} />
      </div>
    );
  }
}

export default KegList;
