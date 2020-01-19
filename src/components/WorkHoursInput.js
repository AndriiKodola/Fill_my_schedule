import React from 'react';
import { Consumer } from './Context';

const WorkHoursInput = () => {

	const isValidNum = val => parseInt(val) > 0

	return (
		<Consumer>
			{({ hours, actions }) => {
				return (
					<div id="input-hours">
						<input
							type="text"
							name="hoursPerDay"
							placeholder=" needed hours per day"
							value={typeof hours.perDay === 'undefined' || !isValidNum(hours.perDay) ? '' : hours.perDay}
							onChange={e => actions.setProp('hours', {perDay: parseInt(e.target.value)})}
						/>
						<span>or</span><br></br>
						<input
							type="text"
							name="hoursPerWeek"
							placeholder=" needed hours per week"
							value={typeof hours.perWeek === 'undefined' || !isValidNum(hours.perWeek) ? '' : hours.perWeek}
							onChange={e => actions.setProp('hours', {perWeek: parseInt(e.target.value)})}
						/>
						<span>or</span><br></br>
						<input
							type="text"
							name="hoursPerMonth"
							placeholder=" needed hours per month"
							value={typeof hours.perMonth === 'undefined' || !isValidNum(hours.perMonth) ? '' : hours.perMonth}
							onChange={e => actions.setProp('hours', {perMonth: parseInt(e.target.value)})}
						/>
						<br></br>
					</div>
				);
			}}
		</Consumer>
	);
}

export default WorkHoursInput;