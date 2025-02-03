const Gameboard = (() => {
  let board = ["", "", "", "", "", "", "","",""];

  //Function to get the board state
  const getBoard = () => board;

  //Function to update the board
  const updateBoard = (index, marker) => {
    if(board[index] === ""){
      board[index] = marker;
      return true;
    }
    return false;
  };

  //Function to reset the board
  const resetBoard = () => {
    board = ["", "", "", "", "", "", "", "", ""];
  };

  return{getBoard, updateBoard, resetBoard};
})();