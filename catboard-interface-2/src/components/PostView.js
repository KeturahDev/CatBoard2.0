import React, {useState, useEffect} from 'react';
import PostList from './PostList';
import PostForm from "./PostForm";
import BoardDetails from './BoardDetails';
import PostDetails from './PostDetails';
import PropTypes from 'prop-types'

function PostView(props) {
  const [selectedPostId, selectPostId] = useState(null)
  const [currentlyVisible, setCurrentlyVisible] = useState("BoardDetails")
  const [view, setView] = useState(<p>Loading...</p>);

  useEffect(() => {
    get();}, []
  );

  const get = () => {
    fetch(
      `http://localhost:5000/api/boards/${props.boardId}`,
    {
    method: 'GET',
    })
      .then(res => res.json())
      .then(jsonifiedResponse => {
        setView(<BoardDetails board={jsonifiedResponse} postId={selectedPostId} onSelectingPost={selectingPost}/>)
      })
      .catch(error =>
        console.log(error)) 
  }

  const selectingPost = (postid) => {
    selectPostId(postid)
    setCurrentlyVisible("BoardForm")
    console.log(postid)
  }

  const setVisibility = () => {
    console.log("SELECTEDPOST: ", selectedPostId)
    if (selectedPostId !== null) {
      return {
        component: <PostDetails />,
        buttontext: "Back to the Board"
      }
    } else if (currentlyVisible === "BoardDetails") {
      return {view}
    } else {
      return {
        component: <PostForm />,
        buttontext: "Back to the Board"
      }
    }
  }
 
  const currentlyVisComponent = setVisibility()
  return (
    <React.Fragment>
      <div style={{border: "2px solid green"}}>
        <div>
          {currentlyVisComponent.component}
        </div>
      </div>
    </React.Fragment>
  )
}

PostView.propTypes = {
  boardId: PropTypes.number 
}

export default PostView;