import React from 'react';
import { Consumer } from './Context';

import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';

const DayParametersInput = () => {

	const isValidScatter = val => parseFloat(val) > 0

	return (
		<Consumer>
			{({ scatter, actions }) => {
				return (
					<div id="input-day-parameters">
						<span>Scatter per day:</span><br></br>
						<input
							type="text"
							name="scatter"
							placeholder=" default- no scatter"
							value={typeof scatter === 'undefined' || !isValidScatter(scatter) ? '' : scatter}
							onChange={e => actions.scatterChanger(e.target.value)}
						/>
						<br></br>
						<ButtonToolbar>
							<Button variant="outline-secondary" onClick={() => actions.decrement('scatter', 0.1)}>-</Button>
							<Button variant="outline-secondary" onClick={() => actions.increment('scatter', 0.1)}>+</Button>
						</ButtonToolbar>
					</div>
				);
			}}
		</Consumer>
	);
}

export default DayParametersInput;