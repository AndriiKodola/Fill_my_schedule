import React, { Component } from 'react';

class Day extends Component {
    state = {
        dayOff: this.props.day.dayOff,
        day: this.props.day
    }/*exist only to forse shouldComponentUpdate to work.
    Props become updated (equal to nextProps) before SCU call.
    (PureComponent doesn't work, because makes only shallow check)*/

    shouldComponentUpdate(nextProps, nextState) {
        let shouldUpdate = false;
        shouldUpdate = !Object.is(this.state.day, nextProps.day);
        if (shouldUpdate) {
            this.state.dayOff = nextProps.dayOff;
            this.state.day = nextProps.day;
            return shouldUpdate;
        }
        if (this.props.day.hasOwnProperty('dayOff')) {
            shouldUpdate = this.state.dayOff !== nextProps.day.dayOff;
            if (shouldUpdate) {
                this.state.dayOff = nextProps.dayOff;
                this.state.day = nextProps.day;
                return shouldUpdate;
            }
        }
        return shouldUpdate;
    }

    render () {
        return (
            <tr className={this.props.day.weekend ? "weekend day" : "workday day"}>
                <td className="date-week-day">{this.props.day.dayName}</td>
                <td>{!this.props.day.weekend &&
                    <button
                        className={this.props.day.dayOff ? "dayoff-switcher on" : "dayoff-switcher off"}
                        onClick={() => this.props.dayOffSwitcher(this.props.idx)}>
                        {this.props.day.dayOff ? '\u2713' : ' '}
                    </button>
                }
                </td>
                <td>{this.props.day.hours}</td>
                <td>{/** PROJECT IF PROJECTS ADDED */}</td>
            </tr>
        );
    }
}

export default Day;