import React from 'react';
import PropTypes from 'prop-types';

function PostForm(props) {

  function handleApplyInputs (event ){
    event.preventDefault();
    const post = {
      Title: event.target.Title.value,
      Body:event.target.Body.value,
      ImageSource:event.target.ImageSource.value
    }
    props.onAddingPost(post);
    props.onSubmitForm();
  }

  return(
    <React.Fragment>
      <div style={{border: "2px solid blue"}}>
        <form onSubmit={handleApplyInputs}>
          <input type="text" name="Title" placeholder="Post title"/>
          <input type="text" name="Body" placeholder="the meat and potatoes"/>
          <input type="text" name="ImageSource" placeholder="image url"/>
          <button type="submit">submit</button>
        </form>
      </div>
    </React.Fragment>
  );
}

PostForm.propTypes = {
  title: PropTypes.string,
  body: PropTypes.string,
  imageSource: PropTypes.string,
  onAddingPost: PropTypes.func,
  onSubmitForm: PropTypes.func
}

export default PostForm;