import Box from './Box.jsx';
import { useState } from 'react';
import './Board.css';
function Board({isXNext, value, onPlay}) {
    const [status, setStatus] = useState("");
    function handleClick(i){
        // console.log("clicked");
        if(value[i] || calculateWinner(value)) {
            return;
        }
        const newValue = value.slice();
        if(isXNext) {
            newValue[i] = 'X';
        }else {
            newValue[i] = 'O';
            
        }
        onPlay(newValue);
        const winner = calculateWinner(newValue);
        if(winner) {
            setStatus(`Winner is ${winner}`);
        } else {
            setStatus(`Its player ${isXNext ? 'O':'X'} turn`);
        }
    }


    console.log(value);
    return (
        <>
        <div className="status-container">{status}</div>
        <div className='board' >
            <Box values = {value[0]} handleBoxClick={()=> handleClick(0)} />
            <Box values = {value[1]} handleBoxClick={()=> handleClick(1)} />
            <Box values = {value[2]} handleBoxClick={()=> handleClick(2)} />
            <Box values = {value[3]} handleBoxClick={()=> handleClick(3)} />
            <Box values = {value[4]} handleBoxClick={()=> handleClick(4)} />
            <Box values = {value[5]} handleBoxClick={()=> handleClick(5)} />
            <Box values = {value[6]} handleBoxClick={()=> handleClick(6)} />
            <Box values = {value[7]} handleBoxClick={()=> handleClick(7)} />
            <Box values = {value[8]} handleBoxClick={()=> handleClick(8)} />
        </div>
        </>
    )
}

export default Board;

function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }