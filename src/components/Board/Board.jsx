import React from 'react';
import './Board.scss';
import Proptypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import { Square } from '../Square';

export const Board = ({ squares, onClick }) => (
  <div className="board">
    {squares.map((square, index) => (
      <Square
        key={uuidv4}
        value={square}
        onClick={() => onClick(index)}
      />
    ))}
  </div>
);

Board.propTypes = {
  squares: Proptypes.arrayOf(
    Proptypes.number.isRequired,
  ).isRequired,
  onClick: Proptypes.func.isRequired,
};
