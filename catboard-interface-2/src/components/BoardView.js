import React, {useState} from 'react';
import BoardList from './BoardList'
import BoardForm from "./BoardForm"
// import Board from "./Board"

function BoardView(){

// hook toggles between board list and board form
const [currentlyVisible, setVisibleComponent] = useState("List");

  // function setting 'currentlyVisibleCOmponent' based on state
  const setVisible =  () => {
    if(currentlyVisible === "List") {
      return <BoardList />
    } else {
      <BoardForm />
    }
  }

  const handleSetVisibleComponent = () => {
    if (currentlyVisible === "List") {
      setVisibleComponent("Form")
    } else if (currentlyVisible === "Form") {
      setVisibleComponent("List")
    }
  }

  const currentlyVisibleComponent = setVisible()
  return(
    <React.Fragment>
      {currentlyVisibleComponent}
      <button onClick={handleSetVisibleComponent}></button>
    </React.Fragment>
  );
}

export default BoardView