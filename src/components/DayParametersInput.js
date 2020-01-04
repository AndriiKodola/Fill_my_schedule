import React from 'react';
import { Consumer } from './Context';

const DayParametersInput = () => {
	return (
		<Consumer>
			{({ actions }) => {
				return (
					<div id="input-day-parameters">
						<span>Scatter per day:</span><br></br>
						<input
							type="text"
							name="scatter"
							placeholder=" default- no scatter"
							onChange={actions.handleValueChange}
						/>
						<br></br>
					</div>
				);
			}}
		</Consumer>
	);
}

export default DayParametersInput;