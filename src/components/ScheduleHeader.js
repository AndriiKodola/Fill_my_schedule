import React from 'react';

const ScheduleHeader = () => {
    return (
        <thead>
            <tr>
                <th className="table-header">Date</th>
                <th className="table-header">Day-offs</th>
                <th className="table-header">Work hours</th>
            </tr>
        </thead>
    );
}

export default ScheduleHeader;