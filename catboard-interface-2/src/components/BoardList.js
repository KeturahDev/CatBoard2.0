import React, {useState, useEffect} from 'react';
import Board from './Board';
import PropTypes from 'prop-types';

function BoardList() {
  // const [listofBoards, setBoardList] = useState([]);
  
  // useEffect(() => {
  //   get();}, []
  // );

  // useEffect( async () => {
  // const result = await fetch('http://localhost:5000/api/boards, 
  // method: 'GET',
  // )}, []
  // );

  return(
    <React.Fragment>
      <div style={{border: "2px solid purple"}}>
        <p>Here be a list u see har har</p>
      </div>
    </React.Fragment>
  )
}

BoardList.proptypes = {
  name: PropTypes.string,
  boardId: PropTypes.number,
  description: PropTypes.string,
  bannerImage: PropTypes.string
}
export default BoardList;