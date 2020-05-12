import React from 'react';
import PropTypes from 'prop-types';

function Board(props) {
  const {board} = props;
  return(
    <div>
      <h2>{board.name}</h2>

    </div>
  );
}

Board.propTypes = {
 board: PropTypes.object
}

export default Board;