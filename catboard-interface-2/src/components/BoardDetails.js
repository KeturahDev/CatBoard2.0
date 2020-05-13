import React from 'react';
import BoardForm from './BoardForm';
import PostList from './PostList';
import PropTypes from 'prop-types'

function BoardDetails(props){
  const { board } = props;
  
  return(
    <React.Fragment>
      <div>
        <h2>Board Details</h2>
        <img src={board.bannerImage} alt="banner image"/>
        <h3>{board.name}</h3>
        <h3>{board.description}</h3>
      </div>
    </React.Fragment>
  );
}

BoardDetails.propTypes = {
  board: PropTypes.object
}
export default BoardDetails;