import React, {useState, useEffect} from 'react';
import PostList from './PostList';
import PostForm from "./PostForm";
import BoardDetails from './BoardDetails';
import PostDetails from './PostDetails';
import PropTypes from 'prop-types'

function PostView(props) {

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
        setView(<BoardDetails board={jsonifiedResponse}/>)
      })
      .catch(error =>
        console.log(error)) 
  }
 

  return (
    <React.Fragment>
      <div style={{border: "2px solid green"}}>
        <div>
          {view}
        </div>
      </div>
    </React.Fragment>
  )
}

PostView.propTypes = {
  boardId: PropTypes.number 
}

export default PostView;