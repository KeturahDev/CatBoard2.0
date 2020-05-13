import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types'
import PostComponent from './PostComponent'

function PostList(props){

  console.log("POSTS: ", props.posts);

  return(
    <React.Fragment>
      <div style={{boarder: "2px solid orange"}}>
        <p>Here be the list of posts to this board</p> 
        {props.posts.map((post) => <PostComponent post={post}/>)} 
      </div>
    </React.Fragment>
  )
}

PostList.propTypes ={
  posts: PropTypes.array
}

export default PostList;