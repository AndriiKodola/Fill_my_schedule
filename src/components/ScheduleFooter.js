import React from 'react';

const ScheduleFooter = (props) => {
    return (
        <tfoot>
          <tr>
            <td className="table-footer">Total</td>
            <td></td>
            <td className="table-footer">{props.totalHours}</td>
          </tr>
        </tfoot>
    );
}

export default ScheduleFooter