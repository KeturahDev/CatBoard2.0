import React, {useState, useEffect} from 'react';
import Board from './Board';
import PropTypes from 'prop-types';
import BoardForm from './BoardForm';

function BoardList() {
  const [listofBoards, setBoardList] = useState([1,2]);
  const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState(null);
  
  // useEffect(() => {
  //   get();}, []
  // );

  useEffect(() => {
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
      .catch(error => console.log(error));
  }, []);

 

//   public in t BoardId { get; set; }
//   public string Name { get; set; }
//   public string Description { get; set; }
//   public string BannerImage { get; set; }
//   public virtual ICollection<Post> Posts { get; set; }
// }
   
  return(
    <React.Fragment>
      <div style={{border: "2px solid purple"}}>
      <ul>
       {listofBoards.map((board, index) => 
          <Board board={board}  key = {index} />
       )}
      </ul>
      </div>
    </React.Fragment>
  )
}

BoardList.propTypes = {
  name: PropTypes.string,
  boardId: PropTypes.number,
  description: PropTypes.string,
  bannerImage: PropTypes.string,

}
export default BoardList;