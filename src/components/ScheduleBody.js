import React from 'react';
import { Consumer } from './Context';
import Day from './Day';

const ScheduleBody = () => {
    return (
        <Consumer>
            { ({days, actions}) => {
                return (
                    <tbody>
                        {days.map((day, idx) => 
                            <Day day={day} key={idx.toString()} idx={idx} dayOffSwitcher={actions.dayOffSwitcher}/>
                        )}
                    </tbody>  
                );
            }}
      </Consumer>
    );
}

export default ScheduleBody;