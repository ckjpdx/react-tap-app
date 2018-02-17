import React from 'react';
import PropTypes from 'prop-types';

function EditDetail(props){
  let _detailEditInput = null;

  function handleEditInput(){
    let newDetail = _detailEditInput.value;
    props.onUpdateDetail(newDetail);
    _detailEditInput.value = '';
  }

  return (
    <div>
      <h3>Edit Detail: {props.selectedDetail.detail}</h3>
      <p>ID: {props.selectedDetail.id}</p>
      <input ref={input => _detailEditInput = input}></input>
      <button onClick={handleEditInput}>Commit</button>
    </div>
  );
}

EditDetail.propTypes = {
  onUpdateDetail: PropTypes.func,
  selectedDetail: PropTypes.object
};

export default EditDetail;
