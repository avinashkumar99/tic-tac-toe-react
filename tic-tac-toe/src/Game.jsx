import { useState } from "react";
import Board from "./Board";

export default function Game() {
    const [isXNext, setIsXNext] = useState(true);
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const currentValue = history[history.length -1];

    function handlePlay(newValue) {
        setHistory([...history, newValue]);
        setIsXNext(!isXNext);
      
    }
    function jumpTo() {
        return;
    }


    const moves = history.map((squares, move) => {
        let description;
        if (move > 0) {
          description = 'Go to move #' + move;
        } else {
          description = 'Go to game start';
        }
        return (
          <li>
            <button onClick={() => jumpTo(move)}>{description}</button>
          </li>
        );
      });

    return (
        <>
        <Board isXNext={isXNext} value={currentValue} onPlay={handlePlay} />
        <div className="game-info">
            <ol>
                {moves}
            </ol>
        </div>
        </>
    )
}