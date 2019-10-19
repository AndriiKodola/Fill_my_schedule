import React, { Component } from 'react';
import InteractionPanel from './components/InteractionPanel';
import Schedule from './components/Schedule';
import inputData, {
          getEquivHoursPerDay,
          getNumInput,
          getMonthInput
        } from './models/InteractionHandling';
import ScheduleData from './models/ScheduleData';
import Month from './models/Month';

class App extends Component {
  state = Object.assign(
    new inputData().getData(),
    new ScheduleData(8, 0.5, (new Date().getMonth()), (new Date().getFullYear())).generate()
  );

  switchDayoff = targetIdx => {
    this.setState( prevState => ({
      hoursPerMonth: Math.round(prevState.hoursPerMonth - prevState.days[targetIdx].workHoursWithScatter),
      days: prevState.days.map((day, idx) => {
              if (idx === targetIdx) {
                  day.dayOff = !day.dayOff;
                  day.workHoursWithScatter = 0;
              }
              return day;
          })
    }));
  }

  updateEquivHoursPerDay = (e) => {
    const workDaysNum = (new Month(this.state.targetMonth, this.state.targetYear)).workDaysNum();
    const hours = {};
    const fieldName = e.target.name;
    hours[fieldName] = getNumInput(e.target);
    
    this.setState({
      equivHoursPerDay: getEquivHoursPerDay(workDaysNum, hours)
    });
  }

  updateNonHours = (e) => {
    const updatedState = {};
    const fieldName = e.target.name;
    const newValue = fieldName === 'targetMonth' ? getMonthInput(e.target) : getNumInput(e.target);
    updatedState[fieldName] = newValue;
    this.setState(updatedState);
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const newSchedule = new ScheduleData(this.state.equivHoursPerDay, this.state.scatter, this.state.targetMonth, this.state.targetYear).generate();
    this.setState({
      days: newSchedule.days,
      hoursPerMonth: newSchedule.hoursPerMonth
    });
  }

  render () {
    return (
      <div className="schedule">
        {/** A control panel for user input */}
        <InteractionPanel updateHours={this.updateEquivHoursPerDay} updateNonHours={this.updateNonHours} handleSubmit={this.handleSubmit}/>
        {/** Generated schedule from user input */}
        <Schedule hoursPerDay={this.state.hoursPerDay} switchDayoff={this.switchDayoff} schedule={this.state.days} totalHours={this.state.hoursPerMonth}/>
      </div>
    );
  }
}

export default App;
