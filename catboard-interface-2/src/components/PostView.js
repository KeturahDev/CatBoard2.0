import React, {useState, useEffect} from 'react';
import PostList from './PostList';
import PostForm from "./PostForm";
import BoardDetails from './BoardDetails';
import PostDetails from './PostDetails';
import PropTypes from 'prop-types'

function PostView(props) {
  // call upon database and retreive specific board info based upon id... (where id === id)

  const [selectedBoard, setBoard] = useState([1,2]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    get();}, []
  );

  const get = () => {
    setIsLoading(true)
    fetch(
        `http://localhost:5000/api/boards/${props.boardId}`,
    {
    method: 'GET',
    })
      .then(res => res.json())
      .then(jsonifiedResponse => {
        setBoard(jsonifiedResponse); //
        setIsLoading(false); //
      })
      .catch(error => 
        console.log(error),
        setIsLoading(false));
    }
 
  return (
    <React.Fragment>
      <div style={{border: "2px solid green"}}>
        <p>{selectedBoard.name}</p>
        <BoardDetails />
      </div>
    </React.Fragment>
  )
}

PostView.propTypes = {
  boardId: PropTypes.number 
}

export default PostView;