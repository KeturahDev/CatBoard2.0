import React, {useState, useEffect} from 'react';
import Board from './Board';
import PropTypes from 'prop-types';
import BoardForm from './BoardForm';

function BoardList(props) {
  const [listofBoards, setBoardList] = useState([1,2]);
  const [isLoading, setIsLoading] = useState(false);

  // const [error, setError] = useState(null);
  // useEffect(() => {
  //   get();}, []
  // );

  useEffect(() => {
    setIsLoading(true)
    fetch(
        'http://localhost:5000/api/boards', 
    { 
    method: 'GET',
    })
      .then(res => res.json())
      .then(response => {
        setBoardList(response);
        setIsLoading(false);
      })
      .catch(error => 
        console.log(error),
        setIsLoading(false)
        );
    }, []);
 
   
  return(
    <React.Fragment>
      <div style={{border: "2px solid purple"}}>
      <ul>
       {listofBoards.map((board, index) =>
        <div key={index} style={{border: "2px solid violet"}} >
          <Board board={board} onClickFunc={props.onSelectingBoard}  />
        </div>
       )}
      </ul>
      </div>
    </React.Fragment>
  )
}

BoardList.propTypes = {
  onSelectingBoard: PropTypes.func,
  // name: PropTypes.string,
  // boardId: PropTypes.number,
  // description: PropTypes.string,
  // bannerImage: PropTypes.string,

}
export default BoardList;