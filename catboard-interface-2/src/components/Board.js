import React from 'react';
import PropTypes from 'prop-types';

function Board(props) {
  const {board} = props;
  return(
    <div onClick={() => props.onClickFunc(board.boardId)}>
      <h2>{board.name}</h2>

    </div>
  );
}

Board.propTypes = {
 board: PropTypes.object,
 onClickFunc: PropTypes.func
//  key: PropTypes.number
}

export default Board;