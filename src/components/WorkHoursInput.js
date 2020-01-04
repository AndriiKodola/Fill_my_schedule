import React from 'react';
import { Consumer } from './Context';

const WorkHoursInput = () => {
	return (
		<Consumer>
			{({ hours, actions }) => {
				return (
					<div id="input-hours">
						<input
							type="text"
							name="hoursPerDay"
							placeholder=" needed hours per day"
							value={hours.perDay === 0 ? '' : hours.perDay}
							onChange={actions.handleHoursPerDayChange}
						/>
						<span>or</span><br></br>
						<input
							type="text"
							name="hoursPerWeek"
							placeholder=" needed hours per week"
							value={hours.perWeek === 0 ? '' : hours.perWeek}
							onChange={actions.handleHoursPerWeekChange}
						/>
						<span>or</span><br></br>
						<input
							type="text"
							name="hoursPerMonth"
							placeholder=" needed hours per month"
							value={hours.perMonth === 0 ? '' : hours.perMonth}
							onChange={actions.handleHoursPerMonthChange}
						/>
						<br></br>
					</div>
				);
			}}
		</Consumer>
	);
}

export default WorkHoursInput;