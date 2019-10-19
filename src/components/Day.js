import React from 'react';

const Day = (props) => {
    return (
        <tr className={props.day.weekend ? "weekend day" : "workday day"}>
            <td className="date-week-day">{props.day.dateWeekDay}</td>
            <td>{!props.day.weekend &&
                <button className={props.day.dayOff ? "dayoff-switcher on" : "dayoff-switcher off"} onClick={() => props.switchDayoff(props.idx)}>Day-off</button>
            }
            </td>
            <td>{props.day.workHoursWithScatter}</td>
            <td>{/** PROJECT IF PROJECTS ADDED */}</td>
        </tr>
    );
}

export default Day;