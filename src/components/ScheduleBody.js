import React from 'react';
import { Consumer } from './Context';
import Day from './Day';

const ScheduleBody = () => {
    return (
        <Consumer>
            { ({month, actions}) => {
                return (
                    <tbody>
                        {month.map((day, idx) => 
                            <Day day={day} key={idx.toString()} dayOffSwitcher={actions.dayOffSwitcher}/>
                        )}
                    </tbody>  
                );
            }}
      </Consumer>
    );
}

export default ScheduleBody;