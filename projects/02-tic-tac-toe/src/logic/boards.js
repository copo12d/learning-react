import { winningCombinations } from '../constants';

export const checkWinner = (boardToCheck) => {
    for (const combination of winningCombinations) {
      const [a, b, c] = combination;
      if (
        boardToCheck[a] &&
        boardToCheck[a] === boardToCheck[b] &&
        boardToCheck[a] === boardToCheck[c]
      ) {
        return boardToCheck[a];
      }
    }
    return null;
};

export const checkEndgame = (newBoard) => {
  return newBoard.every((square) => square !== null);
};