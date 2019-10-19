import React from 'react';
import { Consumer } from './Context';
import Day from './Day';

const ScheduleBody = (props) => {
    return (
            <tbody>
                {props.schedule.map((day, idx) => 
                    <Day day={day} key={idx.toString()} idx={idx} switchDayoff={props.switchDayoff}/>
                )}
            </tbody>
    );
}

export default ScheduleBody;