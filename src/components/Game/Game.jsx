import React, { useState } from 'react';
import './Game.scss';
import { Board } from '../Board';
import { Player } from '../Player';

const combs = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const winCheck = board => combs
  .some(comb => board[comb[0]]
    && board[comb[0]] === board[comb[2]]
    && board[comb[0]] === board[comb[1]]);

const isWinAvaliable = (board) => {
  for (let i = 0; i < 8; i += 1) {
    const [a, b, c] = combs[i];
    const line = [board[a], board[b], board[c]];

    if (line.filter(item => item === 'x').length === 0
      || line.filter(item => item === 'o').length === 0) {
      return true;
    }
  }

  return false;
};

export const Game = () => {
  const clearBoard = Array(9).fill(null);
  const [board, setBoard] = useState(clearBoard);
  const [firstPlayer, setFirstPlayer] = useState('x');
  const [secondPlayer, setsecondPlayer] = useState('o');
  const [nextMoove, setNextMoove] = useState('x');
  const winner = winCheck(board);
  const pad = isWinAvaliable(board);

  const moove = (index) => {
    const boardCopy = [...board];

    if (!board[index] && !winner) {
      boardCopy[index] = nextMoove === 'x' ? 'x' : 'o';
      setBoard(boardCopy);
      setNextMoove(nextMoove === 'x' ? 'o' : 'x');
    }
  };

  const newGame = () => {
    setBoard(clearBoard);
    setNextMoove('x');
  };

  const chooseText = () => {
    if (winner) {
      return `Winner is ${nextMoove === 'x' ? secondPlayer : firstPlayer}`;
    }

    if (pad) {
      return `${nextMoove === 'o'
        ? secondPlayer
        : firstPlayer}
        it's your moove`;
    }

    return 'No one can win';
  };

  return (
    <div className="game">
      <div className="game__players">
        <Player
          name="firstPlayer"
          text="First player"
          value={firstPlayer}
          setNmae={setFirstPlayer}
          onChange={event => setFirstPlayer(event.target.value)}
        />
        <Player
          name="secondPlayer"
          text="Second player"
          value={secondPlayer}
          setNmae={setsecondPlayer}
          onChange={event => setsecondPlayer(event.target.value)}
        />
      </div>
      <button
        className="button is-light"
        type="button"
        onClick={() => newGame()}
      >
        New game
      </button>
      <Board
        onClick={moove}
        squares={board}
      />
      <div className="box">
        {chooseText()}
      </div>
    </div>
  );
};
