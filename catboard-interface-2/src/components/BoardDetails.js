import React from 'react';
import PostList from './PostList';
import PropTypes from 'prop-types';

function BoardDetails(props){
  const { board } = props;
  
  const boardPosts = board.posts

  return(
    <React.Fragment>
      <div style={{border: "2px solid red"}}>
        <h2>Board Details!!</h2>
        <img src={board.bannerImage} alt="banner image"/>
        <h3>{board.name}</h3>
        <h3>{board.description}</h3>
        <hr/>
        <PostList postId={props.postId} onSelectingPost={props.onSelectingPost} boardid={board.boardId} posts={boardPosts} />
      </div>
    </React.Fragment>
  );
}

BoardDetails.propTypes = {
  board: PropTypes.object,
  onSelectingPost: PropTypes.func,
  postId: PropTypes.number
}

export default BoardDetails;