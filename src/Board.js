import React, { useState } from 'react';
import Cell from './Cell';
import './Board.css';

/** Game board of Lights out.
 *
 * Properties:
 *
 * - nrows: number of rows of board
 * - ncols: number of cols of board
 * - chanceLightStartsOn: float, chance any cell is lit at start of game
 *
 * State:
 *
 * - board: array-of-arrays of true/false
 *
 *    For this board:
 *       .  .  .
 *       O  O  .     (where . is off, and O is on)
 *       .  .  .
 *
 *    This would be: [[f, f, f], [t, t, f], [f, f, f]]
 *
 *  This should render an HTML table of individual <Cell /> components.
 *
 *  This doesn't handle any clicks --- clicks are on individual cells
 *
 **/

function Board({ nrows, ncols, chanceLightStartsOn }) {
  const [board, setBoard] = useState(createBoard());

  /** create a board nrows high/ncols wide, each cell randomly lit or unlit */
  function createBoard() {
    let initialBoard = [];
    // TODO: create array-of-arrays of true/false values
    for (let i = 0; i < nrows; i++) {
      initialBoard.push(getRow(ncols));
    }
    return initialBoard;
  }

  function getRow(cols) {
    let rowArray = [];
    for (let i = 0; i < cols; i++) {
      rowArray.push(getTrueFalse(chanceLightStartsOn));
    }
    return rowArray;
  }

  function getTrueFalse(chance) {
    if (chance === 1) {
      return true;
    }
    if (chance === 0) {
      return false;
    }
    let on = true;

    const rndNum = Math.floor(Math.random() * 2);
    rndNum === 0 ? (on = false) : (on = true);
    return on;
  }
  function hasWon() {
    // TODO: check the board in state to determine whether the player has won.
  }

  function flipCellsAround(coord) {
    // TODO: Make a (deep) copy of the oldBoard
    let deepBoard = [...board];
    const [y, x] = coord.split('-').map(Number);

    // TODO: in the copy, flip this cell and the cells around it
    let newArray = flipCell(y, x, deepBoard);

    // TODO: return the copy
    setBoard(newArray);
    winGame(newArray);
  }
  const flipCell = (y, x, deepBoard) => {
    // if this coord is actually on board, flip it
    if (x >= 0 && x < ncols && y >= 0 && y < nrows) {
      deepBoard[y][x] = !deepBoard[y][x];
      if (y !== 0) {
        deepBoard[y - 1][x] = !deepBoard[y - 1][x];
      }
      if (y !== deepBoard.length - 1) {
        deepBoard[y + 1][x] = !deepBoard[y + 1][x];
      }
      if (x !== 0) {
        deepBoard[y][x - 1] = !deepBoard[y][x - 1];
      }
      if (x !== deepBoard[y].length - 1) {
        deepBoard[y][x + 1] = !deepBoard[y][x + 1];
      }
      return deepBoard;
    }
  };

  // if the game is won, just show a winning msg & render nothing else

  function winGame(gameBoard) {
    let winner = true;
    gameBoard.map((board) => {
      board.map((row) => {
        if (row === true) {
          winner = false;
          return;
        }
      });
    });
    // console.log(winner);
    if (winner) {
      let killerRobot = document.querySelector('tbody');
      killerRobot.parentElement.remove();
      const newBody = document.querySelector('body');
      const newDiv = document.createElement('div');
      newDiv.innerText = 'YOU ARE A WINNER!!';
      newDiv.className = 'winner';
      newBody.append(newDiv);
      // let newTable = document.querySelector('table');

      return createBoard();
      // killerRobot.deleteRow();
      alert('YOU WIN!!!');
    }
    return <Cell />;
  }

  // make table board

  function getCell(on, x, y) {
    return (
      <Cell isLit={on} flipCellsAroundMe={() => flipCellsAround(x + '-' + y)} />
    );
  }
  // TODO
  return (
    <>
      <table className="Board" role={'table'}>
        <tbody>
          {board.map((row, x) => (
            <tr key={x}>{row.map((on, y) => getCell(on, x, y))}</tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Board;
