import React, { Component } from 'react';

import Month from '../../models/Month';
import '../../models/utils';



const FillScheduleContext = React.createContext();

export const Consumer = FillScheduleContext.Consumer;

export class Provider extends Component {
	state = new Month(new Date().getMonth(), new Date().getFullYear(), 8, .5);

	shouldComponentUpdate(nextProps, nextState) {
		if (indentical(this.state.rawInput, nextState.rawInput)) {
			return false;
		}
		return true;
	}

	updateTotalHoursDueDayOff = (prevState, targetIdx) => {
		const { totalHours, equivHoursPerDay, days } = prevState;
		const currDay = days[targetIdx];
		if (currDay.dayOff) {
			return newTotalMonthHours(totalHours, equivHoursPerDay);
		}
		return newTotalMonthHours(totalHours, -currDay.hours);
	}

	dayOffSwitcher = targetIdx => {
		this.setState(prevState => ({
			totalHours: Math.round(this.updateTotalHoursDueDayOff(prevState, targetIdx)),
			days: prevState.days.map((day, idx) => {
				if (idx === targetIdx) {
					switchDayOff(day);
					if (day.dayOff) {
						updateHours(day, 0, 0);
					} else {
						updateHours(day, prevState.equivHoursPerDay, prevState.rawInput.scatter);
					}
				}
				return day;
			})
		}));
	}

	updateMonth = newMonth => {
		this.setState(prevState => {
			let newState = updateProp(this.state, 'monthNum', newMonth);
			const { hours, scatter, month } = newState.rawInput;
			newState = updateProp(newState, 'days', newMonthSchedule(month.monthNum, month.yearNum, hours, scatter));
			return newState;
		});
	}

	updateYear = yearChange => {
		this.setState(prevState => updateProp(this.state, 'yearNum', prevState.month.yearNum + yearChange));
	}

	/*
	updateEquivHoursPerDay = (e) => {
		const workDaysNum = (new Month(this.state.targetMonth, this.state.targetYear)).workDaysNum();
		const hours = {};
		const fieldName = e.target.name;
		hours[fieldName] = getNumInput(e.target);

		this.setState({
			equivHoursPerDay: getEquivHoursPerDay(workDaysNum, hours)
		});
	}
	*/

	handleHoursPerDayChange = e => {
		this.setState(prevState => updateProps(this.state, 
			['perDay', 'perWeek', 'perMonth', 'days'], 
			[getNumInput(e.target), 0, 0, newMonthSchedule(
				prevState.rawInput.month.monthNum, 
				prevState.rawInput.month.yearNum, 
				{perDay: getNumInput(e.target)}, 
				prevState.rawInput.scatter)
			]));
	}

	handleHoursPerWeekChange = e => {
		this.setState(updateProps(this.state, ['perDay','perWeek','perMonth'], [0,getNumInput(e.target),0]));
	}

	handleHoursPerMonthChange = e => {
		this.setState(updateProps(this.state, ['perDay','perWeek','perMonth'], [0,0,getNumInput(e.target)]));
	}

	/*
	updateNonHours = (e) => {
		const updatedState = {};
		const fieldName = e.target.name;
		const newValue = fieldName === 'targetMonth' ? getMonthInput(e.target) : getNumInput(e.target);
		updatedState[fieldName] = newValue;
		this.setState(updatedState);
	}

	catchInput = (e) => {
		//catches input to rawInput state. It should be hidden inside rawInput to prevent trigering shouldComponent update etc.
	}
	*/

	render() {
		return (
			<FillScheduleContext.Provider
				value={{
					hours: this.state.rawInput.hours,
					month: this.state.rawInput.month,
					totalHours: this.state.totalHours,
					days: this.state.days,
					actions: {
						dayOffSwitcher: this.dayOffSwitcher,
						updateMonth: this.updateMonth,
						updateYear: this.updateYear,
						handleHoursPerDayChange: this.handleHoursPerDayChange,
						handleHoursPerWeekChange: this.handleHoursPerWeekChange,
						handleHoursPerMonthChange: this.handleHoursPerMonthChange
					},
				}}>
				{this.props.children}
			</FillScheduleContext.Provider>
		);
	}
}