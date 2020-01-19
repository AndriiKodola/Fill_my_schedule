import Month from './Month';

export default class State{
  constructor(monthNum, yearNum, hours, scatter) {
    this.monthNum = monthNum;
    this.yearNum = yearNum;
    this.hours = hours;
    this.scatter = scatter;
    this.month = new Month(monthNum, yearNum, hours, scatter)
  }

  setProp = ( propName, value ) => this[propName] = value;

  setAll = ( monthNum, yearNum, hours, scatter ) => {
    this.setProp('monthNum', monthNum);
    this.setProp('yearNum', yearNum);
    this.setProp('hours', hours);
    this.setProp('scatter', scatter);
    this.month.setAll(monthNum, yearNum, hours, scatter);
  }
}