
import { round } from './utils';

export default class Day{
  constructor(dateDayNum, dayNum, hoursPerDay, scatter) {
    this.monthIdx = dateDayNum - 1;
    this.dayName = this.genDayName(dateDayNum, dayNum);
    this.weekend = this.isWeekend(dayNum);
    this.baseHours = this.genHours(hoursPerDay, scatter);
    this.hours = this.baseHours;
    this.dayOff = false;
  }

  genDayName = (dateDayNum, dayNum) => {
    switch (dayNum) {
      case 0:
        return `${dateDayNum} ${"Sunday"}`;
      case 1:
        return `${dateDayNum} ${"Monday"}`;
      case 2:
        return `${dateDayNum} ${"Tuesday"}`;
      case 3:
        return `${dateDayNum} ${"Wednesday"}`;
      case 4:
        return `${dateDayNum} ${"Thursday"}`;
      case 5:
        return `${dateDayNum} ${"Friday"}`;
      case 6:
        return `${dateDayNum} ${"Saturday"}`;
      default:
        return 'Incorrect day num'
      }
  }

  isWeekend = dayNum => {
    switch (dayNum) {
      case 0:
        return true;
      case 6:
        return true;
      default:
        return false;
      }
  }

  genHours = (hours, scatter) => {
    let workHours = 0;
    
    if (!this.weekend) {
      const sign = Math.random() < 0.5 ? -1 : 1;
      workHours = round(sign * Math.random() * scatter + hours, 1);
    }

    return workHours;
  }

  /**
   * Switches dayOff property of the day object (true/false)
   * @param {object} day 
   */
  switchDayOff = () => {
    this.dayOff = !this.dayOff;
    this.hours = this.dayOff ? 0 : this.baseHours;
  }

  /**
   * Updates hours property of the day object with given value
   * @param {object} day 
   * @param {float} hours 
   * @param {float} scatter 
   */
  setHours = (hours, scatter) => {
    this.hours = this.genHours(hours, scatter);
  }
}
