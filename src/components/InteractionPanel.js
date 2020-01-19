import React from 'react';
import { Consumer } from './Context';
import WorkHoursInput from './WorkHoursInput';
import DayParametersInput from './DayParametersInput';
import YearCalendar from './YearCalendar';

const InteractionPanel = () => {
	return (
		<div id="input-container">
			<Consumer>
				{({ actions }) => {
					return (
						<form id="input-form" action="index.html" method="post" onSubmit={(e)=>actions.submitHandler(e)}>
							<span>Please, enter:</span><br></br>

							<WorkHoursInput />
							<DayParametersInput />
							<YearCalendar />

							<button id="submit-button" type="submit">Generate new schedule</button>
						</form>
					);
				}}
			</Consumer>
		</div>
	);
}

export default InteractionPanel;