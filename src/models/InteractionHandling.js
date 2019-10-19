import Month from './Month';

export { 
          getEquivHoursPerDay,
          getNumInput,
          getMonthInput,
          handleCopyToClipboard
        };

/**
 * Transforms needed work hours per day, week or month to equivalent hours per day
 * 
 * @param {int} workDaysInMonth
 * @param {object} neededHoursInput - needed hours {perDay, perWeek, perMonth}
 * 
 * @return {int} - equivalent numer of hours per day
 */
const getEquivHoursPerDay = (workDaysInMonth, neededHoursInput) => {
  const { hoursPerDay, hoursPerWeek, hoursPerMonth } = neededHoursInput;
  
  if (hoursPerDay) {
      return hoursPerDay;
  } else if (hoursPerWeek) {
      return hoursPerWeek / 5;
  } else if (hoursPerMonth) {
      return hoursPerMonth / workDaysInMonth;
  } else {
    return 0;
  }
}

/**
 * 
 * @param {HTML input reference} inputField
 * 
 * @return {float} - floar input 
 */
const getNumInput = inputField => parseFloat(inputField.value);

const getMonthInput = inputMonth => getNumInput(inputMonth) - 1;


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
