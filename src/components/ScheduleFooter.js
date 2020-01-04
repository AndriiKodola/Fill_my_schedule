import React from 'react';
import { Consumer } from './Context';

const ScheduleFooter = () => {
    return (
      <tfoot>
        <tr>
          <td className="table-footer">Total</td>
          <td></td>
          <Consumer>
            { ({totalHours}) => <td className="table-footer">{totalHours}</td>}
          </Consumer>
        </tr>
      </tfoot>
    );
}

export default ScheduleFooter