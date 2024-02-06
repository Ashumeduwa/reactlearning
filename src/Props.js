import React, { useState } from "react";

const CalculateData = (props) => {

    function changeInputValue(){
        setRandomData(props.random())
    }
    let [randomData, setRandomData] = useState('ranDom data will be printed');

    return (
        <div className='myClass'>
            <input type="text" value={randomData} readOnly />
            <input type="button" value="Print random number" onClick={changeInputValue} />
        </div>
    );
}

export default CalculateData;