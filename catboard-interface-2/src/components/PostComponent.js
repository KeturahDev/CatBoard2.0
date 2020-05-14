import React from 'react';
import PropTypes from 'prop-types';

function PostComponent(props) {

  const {post} = props;
  
  return(
    <div style={{border: "2px solid magenta"}} onClick={() => props.clickyclack(post.postId)}>
      <p>{post.title}</p>
    </div>
  );
}

PostComponent.propTypes = {
postId: PropTypes.number,
title: PropTypes.string,
body: PropTypes.string,
authorId: PropTypes.number,
boardId: PropTypes.number,
imageSource: PropTypes.string,
onClickingDelete: PropTypes.func,
onClickingEdit: PropTypes.func,
whenPostComponentClicked: PropTypes.func
}

export default PostComponent;