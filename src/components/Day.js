import React, {PureComponent} from 'react';

export class Day extends PureComponent {
    render() {
        return (
            <tr className={this.props.day.weekend ? "weekend day" : "workday day"}>
                <td className="date-week-day">{this.props.day.dayName}</td>
                <td>{!this.props.day.weekend &&
                    <button
                        className={this.props.day.dayOff ? "dayoff-switcher on" : "dayoff-switcher off"}
                        onClick={() => this.props.dayOffSwitcher(this.props.day.monthIdx)}>
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