import './Box.css';

function Box({values, handleBoxClick}){
        
    
    return (
        <>
        <div className="box" onClick={handleBoxClick}>{values}
        </div>
        </>
    )
}

export default Box;