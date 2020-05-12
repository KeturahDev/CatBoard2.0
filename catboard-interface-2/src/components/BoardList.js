import React, {useState, useEffect} from 'react';
import Board from './Board';
import PropTypes from 'prop-types';

function BoardList() {
  // const [listofBoards, setBoardList] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState(null);
  
  // useEffect(() => {
  //   get();}, []
  // );

//   useEffect(() => {
//     fetch(
        // 'http://localhost:5000/api/boards', 
//     { 
//     method: 'GET',
//     })
//   }
// )
// .then(res => res.json())
//       .then(response => {
//         setBoardList(response);
//         setIsLoading(false);
//       })
//       .catch(error => console.log(error));
//   }, []);

  return(
    <React.Fragment>
      <div style={{border: "2px solid purple"}}>
        <p>Here be a list u see har har</p>
      </div>
    </React.Fragment>
  )
}


BoardList.propTypes = {
  name: PropTypes.string,
  boardId: PropTypes.number,
  description: PropTypes.string,
  bannerImage: PropTypes.string
}
export default BoardList;