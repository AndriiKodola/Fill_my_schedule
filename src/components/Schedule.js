import React from 'react';

import ScheduleBody from './ScheduleBody';
import ScheduleHeader from './ScheduleHeader';
import ScheduleFooter from './ScheduleFooter';

const Schedule = () => {
        return (
            <table id="schedule">
                <ScheduleHeader />
                <ScheduleBody />
                <ScheduleFooter />
            </table>
        );
}

export default Schedule;