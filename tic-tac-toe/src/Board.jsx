import Box from './Box.jsx';
import { useState } from 'react';
import './Board.css';
function Board() {
    const [value, setValues] = useState(Array(9).fill(null));
    const handleClick = ()=>{
        console.log("clicked");
    }
    // console.log(value);
    return (
        <>
        <div className='board' >
            <Box values = {value[0]} handleEvent={handleClick} />
            <Box values = {value[1]} />
            <Box values = {value[2]} />
            <Box values = {value[3]} />
            <Box values = {value[4]} />
            <Box values = {value[5]} />
            <Box values = {value[6]} />
            <Box values = {value[7]} />
            <Box values = {value[8]} />
        </div>
        </>
    )
}

export default Board;