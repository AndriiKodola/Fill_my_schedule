import React, { Component } from 'react';

import State from '../../models/State';
import { round } from '../../models/utils'


const FillScheduleContext = React.createContext();

export const Consumer = FillScheduleContext.Consumer;

export class Provider extends Component {
	state = new State(new Date().getMonth(), new Date().getFullYear(), {perDay: 8}, 0);

	// shouldComponentUpdate(nextProps, nextState) {
	// 	return !indentical(this.state, newState(month, year, hours, scatter));
	// }

	propSetter = (propName, value) => {
		this.setState(prevState => {
			let state = Object.assign({}, prevState);
			state[propName] = value;
			const { monthNum, yearNum, hours, scatter } = state;
			return new State(monthNum, yearNum, hours, scatter);
		})
	}

	incrementer = (propName, inc) => {
		this.setState(prevState => {
			let state = Object.assign({}, prevState);
			state[propName] = round(state[propName] + inc, 1);
			const { monthNum, yearNum, hours, scatter } = state;
			return new State(monthNum, yearNum, hours, scatter);
		})
	}

	decrementer = (propName, dec) => {
		this.setState(prevState => {
			let state = Object.assign({}, prevState);
			const newPropValue = round(state[propName] - dec, 1);
			state[propName] = newPropValue >= 0 ? newPropValue : 0;
			const { monthNum, yearNum, hours, scatter } = state;
			return new State(monthNum, yearNum, hours, scatter);
		})
	}

	dayOffSwitcher = idx => {
		this.setState(prevState => prevState.month.month[idx].switchDayOff());
	}

	submitHandler = (e) => {
		e.preventDefault();
    this.setState(prevState => {
			const { monthNum, yearNum, hours, scatter } = prevState;
			return new State(monthNum, yearNum, hours, scatter);
		})
  }

	render() {
		return (
			<FillScheduleContext.Provider
				value={{
					state: this.state,
					month: this.state.month.month,
					hours: this.state.hours,
					scatter: this.state.scatter,
					totalHours: this.state.month.totalHours,
					actions: {
						setProp: this.propSetter,
						increment: this.incrementer,
						decrement: this.decrementer,
						dayOffSwitcher: this.dayOffSwitcher,
						submitHandler: this.submitHandler,
					},
				}}>
				{this.props.children}
			</FillScheduleContext.Provider>
		);
	}
}
