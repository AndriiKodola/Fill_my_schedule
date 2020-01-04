export default class Day{
  constructor(dateDayNum, dayNum, hoursPerDay, scatter) {
    this.dayName = this.genDayName(dateDayNum, dayNum);
    this.weekend = this.isWeekend(dayNum);
    this.hours = this.genHours(hoursPerDay, scatter);
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
    if (this.weekend) {
      workHours = 0;
    } else {
      const sign = Math.random() < 0.5 ? -1 : 1;
      workHours = Math.round(sign * Math.random() * scatter + hours);
    }

    return workHours;
  }

  /**
   * Switches dayOff property of the day object (true/false)
   * @param {object} day 
   */
  switchDayOff = () => {
    this.day.dayOff = !this.day.dayOff;
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
