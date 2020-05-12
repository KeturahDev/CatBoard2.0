import React from 'react';
import PropTypes from 'prop-types';

function BoardForm(props) {

  function handleApplyInputs (event ){
    event.preventDefault();
    const board = {
      Name: event.target.Name.value,
      Description: event.target.Description.value,
      ImageURL: event.target.ImageURL.value
    }
    props.onAddingBoard(board);
    props.onSubmitForm();
  }

  return(
    <React.Fragment>
      <div style={{border: "2px solid pink"}}>
        <form onSubmit={handleApplyInputs}>
          <input type="text" name="Name" placeholder="board name"/>
          <input type="text" name="Description" placeholder="describe board"/>
          <input type="text" name="ImageURL" placeholder="image url for banner"/>
          <button type="submit">submit</button>
        </form>
      </div>
    </React.Fragment>
  );
}

BoardForm.propTypes = {
  onAddingBoard: PropTypes.func,
  onSubmitForm: PropTypes.func
}

export default BoardForm;