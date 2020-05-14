import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types'
import PostComponent from './PostComponent'
import PostDetails from './PostDetails'

function PostList(props){
  
  const [view, setView] = useState(<p>Loading...</p>)

  useEffect(() => {
    get();}, []
  );

  const get = () => {
    fetch(
      `http://localhost:5000/api/boards/${props.boardId}/posts/${props.postId}`,
    {
    method: 'GET',
    })
      .then(res => res.json())
      .then(jsonifiedResponse => {
        setView(<PostDetails post={jsonifiedResponse}/>)
      })
      .catch(error =>
        console.log(error)) 
  }
 
  console.log("POSTS: ", props.posts);

  
  
  return(
    <React.Fragment>
      <div style={{boarder: "2px solid orange"}}>
        <p>Here be the list of posts to this board</p> 
        {props.posts.map((post) => <PostComponent clickyclack={props.onSelectingPost} post={post}/>)} 
      </div>
    </React.Fragment>
  )
}

PostList.propTypes ={
  posts: PropTypes.array,
  postId: PropTypes.number
}

export default PostList;