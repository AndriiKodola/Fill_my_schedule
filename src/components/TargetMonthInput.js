import React from 'react';

const TargetMonthInput = (props) => {
    return (
        <div id="input-month">
            <span>Schedule for month:</span><br></br>
            <input
                type="text"
                name="targetMonth"
                placeholder=" default- current month"
                onChange={props.handleValueChange}
            />
            <br></br>
            <input
                type="text"
                name="targetYear"
                placeholder=" default- current year"
                onChange={props.handleValueChange}
            />
            <br></br>
        </div>
    );
}

export default TargetMonthInput;