import React from 'react';
import PropTypes from 'prop-types';

function PostDetails(props) {
  const { post } = props;

  return(
    <React.Fragment>
      <div style={{border: "2px solid red"}}>
        <h2>✨Post details✨</h2>
        <img src={post.imageSource} alt="post image"/>
        <h3>{post.title}</h3>
        <h3>{post.description}</h3>
      </div>
    </React.Fragment>
  );
}

PostDetails.propTypes = {
  post: PropTypes.object
  // postId: PropTypes.number,
  // title: PropTypes.string,
  // body: PropTypes.string,
  // authorId: PropTypes.number,
  // boardId: PropTypes.number,
  // imageSource: PropTypes.string,
  // onClickingDelete: PropTypes.func,
  // onClickingEdit: PropTypes.func,
  // whenPostComponentClicked: PropTypes.func
  }

export default PostDetails;