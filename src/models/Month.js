import Day from './Day';

export default class Month{
	constructor(monthNum, yearNum, hours, scatter) {
		this.name = this.genMonthName(monthNum, yearNum);
		this.workDaysNum = this.genWorkDaysNum(this.genMonthDaysNum(monthNum, yearNum));
		this.hoursPerDay = this.genEquivHoursPerDay(this.workDaysNum, hours);
		this.month = this.genMonth(monthNum, yearNum, this.hoursPerDay, scatter);
		this.totalHours = this.genTotalMonthHours(this.month);
	}

	/***********************************************
	 ***************** SETTERS *********************
	 **********************************************/

	setName = (monthNum, yearNum) => {
		this.name = this.genMonthName(monthNum, yearNum);
	}

	setWorkDaysNum = (monthNum, yearNum) => {
		this.workDaysNum = this.genWorkDaysNum(this.genMonthDaysNum(monthNum, yearNum));
	}

	setHoursPerDay = (workDaysNum, hours) => {
		this.hoursPerDay = this.genEquivHoursPerDay(workDaysNum, hours);
	}

	setMonth = (monthNum, yearNum, hours, scatter) => {
		this.month = this.genMonth(monthNum, yearNum, hours, scatter);
	}

	setTotalHours = month => {
		this.totalHours = this.genTotalMonthHours(month);
	}

	setAll = (monthNum, yearNum, hours, scatter) => {
		this.setName(monthNum, yearNum);
		this.setWorkDaysNum(monthNum, yearNum);
		this.setHoursPerDay(this.workDaysNum, hours);
		this.setMonth(monthNum, yearNum, hours, scatter);
		this.setTotalHours(this.month);
	}

	/***********************************************
	 ***************** GENERATORS ******************
	 **********************************************/

	/**
	* Creates month 'name'
	* @param {int} monthNum - MM
	* @param {int} fullYearNum - YYYY
	* @returns {string} - month name 'MM/YYYY'
	*/
	genMonthName = (monthNum, fullYearNum) => `${monthNum}/${fullYearNum}`

	/**
	 * Returns month array idexes of week days
	 * 
	 * @param {int} firstDayNum - Week day index for first day (sunday = 0)
	 * @param {int} numOfDays - Quantity of days in month
	 * 
	 * @returns {array} - Week day index array for whole month ([0,1,2,3,4,5,6,0,1,2,...])
	 */
	genMonthDaysNum = (monthNum, yearNum) => {
		const firstDayNum = new Date(yearNum, monthNum, 1).getDay();
		const monthLen = new Date(yearNum, monthNum + 1, 0).getDate();
		const daysNumArray = [];
		let currDayNum = firstDayNum;

		for (let i = 0; i < monthLen; i++) {
			daysNumArray.push(currDayNum++ % 7);
		}

		return daysNumArray;
	}

	/**
	 * Returns number of work days in given month
	 * 
	 * @param {object} monthBase_or_days
	 * 
	 * @returns {int}
	 */
	genWorkDaysNum = daysNumArray => {
		return daysNumArray.reduce((acc, cur) => {
			return cur === 5 || cur === 6 ? acc : ++acc;
		}, 0);
	}

	/**
	 * Transforms needed work hours per day, week or month to equivalent hours per day
	 * 
	 * @param {int} workDaysInMonth
	 * @param {object} neededHours - needed hours {perDay, perWeek, perMonth}
	 * 
	 * @return {int} - equivalent numer of hours per day
	 */
	genEquivHoursPerDay = (workDaysInMonth, hours) => {
		const { perDay, perWeek, perMonth } = hours;

		if (perDay) {
			return perDay;
		} else if (perWeek) {
			return perWeek / 5;
		} else if (perMonth) {
			return perMonth / workDaysInMonth;
		} else {
			return 0;
		}
	}

	/**
	 * Calculates total hours from given days array, assuming hours for weekend = 0
	 * @param {array} days 
	 * @returns {int} - total hours
	 */
	genTotalMonthHours = month => {
		return Math.round(month.reduce((acc, cur) => acc + cur.hours, 0));
	}

	/**
	 * Generates month 
	 * @param {float} hours 
	 * @param {float} scatter 
	 * 
	 * @returns {array} - days array
	 * ([
	 *   {
	 *     dateDayNum: 1,
	 *     weekDay: 'Sunday',
	 *     weekend: true,
	 *     dayName: '1 Sunday',
	 *     hours: 0
	 *   },
	 *   {
	 *     dateDayNum: 2,
	 *     weekDay: 'Monday',
	 *     weekend: false,
	 *     dayName: '2 Monday',
	 *     dayOff: false,
	 *     hours: 8
	 *   },
	 *   ...
	 * ])
	 */
	genMonth = (monthNum, yearNum, hours, scatter) => {
		const monthDaysNumArray = this.genMonthDaysNum(monthNum, yearNum)

		const month = monthDaysNumArray.map((dayNum, index) => {
			return new Day(++index, dayNum, hours, scatter);
		});

		return month;
	};

	/***********************************************
	 ***************** UPDATERS ********************
	 **********************************************/

	/**
	 * Updates total hours by given value
	 * @param {float} hoursChange 
	 */
	updTotalMonthHours = hoursChange => {
		this.totalHours += hoursChange;
	}
}