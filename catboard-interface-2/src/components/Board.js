import React from 'react';
import PropTypes from 'prop-types';

function Board(props) {
  return(
    <div>
      <h2>{props.name}</h2>
    </div>
  );
}

Board.propTypes = {
boardId: PropTypes.number,
name: PropTypes.string,
description: PropTypes.string,
bannerImage: PropTypes.string
}