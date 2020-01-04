import Month from './Month';
import {
  switchDayOff,
  updateHours,
  getTotalMonthHours,
  generateMonthName,
  extendMonth
} from './ScheduleActions';

export { 
          getNumInput,
          getMonthInput,
          handleCopyToClipboard
        };

/**
 * Reads and parses user input from input filed
 * @param {HTML input reference} inputField
 * @return {float} - floar input 
 */
const getNumInput = inputField => parseFloat(inputField.value);
/**
 * Reads and parses user input from input filed for month
 * @param {HTML input reference} inputField
 * @return {float} - floar input 
 */
const getMonthInput = inputMonth => getNumInput(inputMonth) - 1;

/**
 * Selects contents of a given HTML node
 * @param {HTML node} el 
 */
const selectElementContents = el => {
	let body = document.body, range, sel;
	if (document.createRange && window.getSelection) {
		range = document.createRange();
		sel = window.getSelection();
		sel.removeAllRanges();
		try {
			range.selectNodeContents(el);
			sel.addRange(range);
		} catch (e) {
			range.selectNode(el);
			sel.addRange(range);
		}
	} else if (body.createTextRange) {
		range = body.createTextRange();
		range.moveToElementText(el);
		range.select();
	}
}

/**
 * Copies selected element to the clipboard
 */
const handleCopyToClipboard = el => {
  selectElementContents(el);
  document.execCommand('copy');

  alert('Table is in clipboard now!');
}




/**
 * ***************************CLASS***************************
 */


export default class inputData {
  constructor () {
    this.hours = {
      hoursPerDay: 0,
      hoursPerWeek: 0,
      hoursPerMonth: 0,
    };
    this.targetMonth = new Date().getMonth();
    this.targetYear = new Date().getFullYear();
    this.equivHoursPerDay = getEquivHoursPerDay((new Month(this.targetMonth, this.targetYear)).workDaysNum(), this.hours);
    this.scatter = 0;
  }

  set = (prop, value) => (this[prop] = value);

  get = prop => this[prop];

  getData = () => {
    return {
      equivHoursPerDay: this.equivHoursPerDay,
      scatter: this.scatter,
      targetMonth: this.targetMonth,
      targetYear: this.targetYear
    }
  }
}



