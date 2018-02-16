import React from 'react';
import PropTypes from 'prop-types';

function AddKegForm(props){
  let _name = null;
  let _brand = null;
  let _price = null;
  let _alcoholContent = null;

  function handleInputs(){
    props.onAddKegSubmit({name: _name.value, brand: _brand.value, price: _price.value, alcoholContent: _alcoholContent.value});
  }

  return (
    <div>
      <h1>Add Keg Form</h1>
      <div>
        <label>Name</label>
        <input ref={input => _name = input} />
        <label>Brand</label>
        <input ref={input => _brand = input} />
        <label>Price per pt</label>
        <input ref={input => _price = input} />
        <label>Alcohol Content</label>
        <input ref={input => _alcoholContent = input} />
        <button onClick={handleInputs}>Add Keg</button>
      </div>
    </div>
  );
}

AddKegForm.propTypes = {
  onAddKegSubmit: PropTypes.func
};

export default AddKegForm;