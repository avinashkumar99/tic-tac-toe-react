import './Box.css';

function Box({values, handleEvent}){

    return (
        <>
        <div className="box" onClick={handleEvent}>{values}
        </div>
        </>
    )
}

export default Box;