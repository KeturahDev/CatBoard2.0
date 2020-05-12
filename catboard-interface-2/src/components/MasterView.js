import React from 'react';
import BoardView from './BoardView';
// import PostView from './PostView';

// const [boardListVisible, setBoardListVisible] = useState(true);
// const [postListVisible, setPostListVisible] = useState(false);
// // const [boardBoxVisible, setBoardBoxVisible] = useState(true);
// // const [postListVisible, setPostListVisible] = useState(false);
// const [currentlyVisible, setVisibleComponent] = useState("Board") //other one = "Post"
// // const [selectedBoard, setBoard] = useState(null);

// const handleToggleMaster  

// const setVisiblity = () => {

// }
function MasterView() {
  return(
    <React.Fragment>
      <BoardView />
    </React.Fragment>
  )
}

export default MasterView;