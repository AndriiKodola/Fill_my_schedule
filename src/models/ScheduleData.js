import Month from './Month';


export default class ScheduleData {
    constructor (hoursPerDay, scatter, monthNum, yearNum, projects) {
        this.hoursPerDay = hoursPerDay;
        this.scatter = scatter;
        this.targetMonth = new Month(monthNum, yearNum);
        this.monthBase = this.targetMonth.getMonthBase();
        this.projects = projects;
    }

    // scheduleProjects = (schedule, projects) => {
    //   const totalProjectPoints = projects.reduce((acc, cur) => {acc + cur.points}, 0);
    //   const pointsPerDay = totalProjectPoints / this.monthBase.length;
    //   let dayIdx = 0;

    //   projects.forEach(project => project.duration = Math.round(project.points / pointsPerDay));
    //   projects.forEach(project => {
    //     for (let projectDay = 0; projectDay < project.duration; projectDay++) {
    //       schedule[dayIdx].project = project.name;//project loss might happen, try project with will be rounded Cell, and on one-day project at the end
    //       dayIdx++;
    //     }
    //   });
    // }
  
    generate = () => {
      let schedule = {
        days: [],
        hoursPerMonth: 0
      };
    
      for (let i = 0; i < this.monthBase.length; i++) {
        schedule.days.push({});
        const curDay = schedule.days[i];

        curDay.weekend = this.monthBase[i].weekend;
        curDay.dateWeekDay = `${i + 1}/${this.targetMonth.monthNum + 1} ${this.monthBase[i].weekDay}`;
        curDay.dayOff = false;

        if (this.monthBase[i].weekend) {
          curDay.workHoursWithScatter = 0;
        } else {
          const sign = Math.random() < 0.5 ? -1 : 1;
          const workHoursWithScatter = this.round(sign * Math.random() * this.scatter + this.hoursPerDay, 1);
          curDay.workHoursWithScatter = workHoursWithScatter;
          schedule.hoursPerMonth += workHoursWithScatter;
        }
      }

      // if (this.projects) {
      //   this.scheduleProjects();
      // }

      schedule.hoursPerMonth = this.round(schedule.hoursPerMonth, 0);

      return schedule;
    }
  
    round = (value, decimals) => {
      return Number(Math.round(value+'e'+decimals)+'e-'+decimals);
    }
  }
