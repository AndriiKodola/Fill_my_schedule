import React, {Component} from 'react';
import { Provider } from './Context';

import ScheduleBody from './ScheduleBody';
import ScheduleHeader from './ScheduleHeader';
import ScheduleFooter from './ScheduleFooter';
import { handleCopyToClipboard } from '../models/InteractionHandling';

class Schedule extends Component {
    constructor(props) {
        super(props);
        this.scheduleRef = React.createRef();
    }

    render () {
        return (
            <div id="table-container">
                <button id="copy-button" onClick={e => handleCopyToClipboard(this.scheduleRef.current)}>Copy table to clipboard</button>
                <table id="schedule" ref={this.scheduleRef}>
                    <ScheduleHeader />
                    <ScheduleBody
                        schedule={this.props.schedule}
                        switchDayoff={this.props.switchDayoff}
                    />
                    <ScheduleFooter totalHours={this.props.totalHours}/>
                </table>
            </div>
        );
    }
}

export default Schedule;