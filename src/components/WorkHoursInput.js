import React from 'react';

const WorkHoursInput = (props) => {
    return (
        <div id="input-hours">
            <input
                type="text"
                name="hoursPerDay"
                placeholder=" needed hours per day"
                onChange={props.handleValueChange}
            />
            <span>or</span><br></br>
            <input
                type="text"
                name="hoursPerWeek"
                placeholder=" needed hours per week"
                onChange={props.handleValueChange}
            />
            <span>or</span><br></br>
            <input
                type="text"
                name="hoursPerMonth"
                placeholder=" needed hours per month"
                onChange={props.handleValueChange}
            />
            <br></br>
        </div>
    );
}

export default WorkHoursInput;