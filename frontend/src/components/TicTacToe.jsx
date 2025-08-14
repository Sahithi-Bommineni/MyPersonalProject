import React, { useState, useEffect } from 'react';
import '../style/TicTacToe.css'; // Assuming you have a CSS file for styling   

function TicTacToe() {

    const [currentPlayer,setCurrentPlayer] = useState('X'); // current player
    const [winner,setWinner] = useState(null); // winner state
    const [board,setBoard] = useState(Array(9).fill(null)); // game board state
    const [scores,setScores] = useState({X:0,O:0,draw:0}); // scores state
    const [gameOver,setGameOver] = useState(false); // game over state  
    const [winningCombo,setWinningCombo] = useState(null); // winning combination state

    const winningCombinations = [
        [0, 1, 2], [3, 4, 5],[6, 7, 8], //row combinations
        [0, 3, 6],[1, 4, 7], [2, 5, 8], //column combinations
        [0, 4, 8], [2, 4, 6] //diagonal combinations
    ];

    const checkWinner = (newBoard) => {
        for (let combo of winningCombinations) {
            const [a, b, c] = combo;
            if (newBoard[a] && newBoard[a] === newBoard[b] && newBoard[a] === newBoard[c]) {
                setWinner(newBoard[a]);
                setWinningCombo(combo);
                return;
            }
        }
        if (newBoard.every(cell => cell)) {
            setWinner('draw'); // Set winner to 'draw' if all cells are filled
        } else {
            setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X'); // Switch player
        }
    };

    const handleCellClick = (index) => {
        if (board[index] || winner || gameOver) return; // Ignore if cell is already filled
        const newBoard = [...board];
        newBoard[index] = currentPlayer; // Update the board with the current player's move
        setBoard(newBoard);

        const result = checkWinner(newBoard);
        if (result) {
        setWinner(result.winner);
        setWinningLine(result.line);
        setScores(prev => ({ ...prev, [result.winner]: prev[result.winner] + 1 }));
        setTimeout(() => setGameOver(true), 800);
        } else if (newBoard.every(cell => cell !== null)) {
        setWinner('draw');
        setScores(prev => ({ ...prev, draws: prev.draws + 1 }));
        setTimeout(() => setGameOver(true), 800);
        } else {
        setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
        }}

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setCurrentPlayer('X');
    setWinner(null);
    setWinningLine(null);
    setGameOver(false);
  };

    const resetScores = () => {
    setScores({ X: 0, O: 0, draws: 0 });
    resetGame();
  };

  return (
    <div>
      <div className="game-container">
        <h1 className="game-title">Tic-Tac-Toe</h1>
        <p className="game-subtitle">Nature's Strategy Game</p>
        
        <div className="game-status">
            <div className="current-player">
                {winner ? 
              (winner === 'draw' ? "It's a Draw!" : `Player ${winner} Wins!`) :
              `Current Player: ${currentPlayer}`
            }
            </div>
        </div>
        
        <div className="game-board">
            {board.map((cell, index) => (
            <button
            key={index}
            onClick={() => handleCellClick(index)}
            className={` cell
                    ${cell === 'X' || cell ==='O' ? 'animate-pulse' : ''}
                    ${!cell && !winner && !gameOver ? 'cursor-pointer' : 'cursor-default'}
                `}
            disabled={cell || gameOver}
            >
            {cell==='X' && (<span className="x">✕</span>)}
            {cell==='O' && (<span className="x">o</span>)}
            </button>
        ))}
        </div>
        
        <div className="score-board">
            <div className="score">
                <div className="score-label">Player X</div>
                <div className="score-value">{scores.X}</div>
            </div>
            <div className="score">
                <div className="score-label">Draws</div>
                <div className="score-value">{scores.draws}</div>
            </div>
            <div className="score">
                <div className="score-label">Player O</div>
                <div className="score-value">{scores.O}</div>
            </div>
        </div>
        
        <button className="reset-button" onClick={resetScores} >New Game</button>
        
        <div className="game-over">
            {gameOver && (
                <div className="game-over-message">
            <div>
                🎉<br/>
                {winner === 'draw'? "It's a Draw!" : `Player ${winner} Wins!`}<br/>
                <div>Click to continue</div>
            </div>
            </div>
        )}
        </div>
    </div>
    </div>
  );
}  

export default TicTacToe;