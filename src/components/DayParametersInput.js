import React from 'react';

const DayParametersInput = (props) => {
    return (
        <div id="input-day-parameters">
            <span>Scatter per day:</span><br></br>
            <input
                type="text"
                name="scatter"
                placeholder=" default- no scatter"
                onChange={props.handleValueChange}
            />
            <br></br>
        </div>
    );
}

export default DayParametersInput;