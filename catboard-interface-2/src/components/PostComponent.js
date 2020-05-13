import React from 'react';
import PropTypes from 'prop-types';

function PostComponent(props) {
  return(
    <div>
      <p>yaaaas?</p>
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