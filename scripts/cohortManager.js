// const Cohort = require('./cohort');

class CohortManager {
  constructor() {
    this.cohorts = [];
    this.allCohortNames = [];
  }

  createCohort(cohortName) {
    if (/^Cohort \d\d/.test(cohortName)) {
      if (!this.allCohortNames.includes(cohortName)) {
        this.cohorts.push({
          [cohortName]: {
            students: [],
            teachers: [],
          },
        });
        this.allCohortNames.push(cohortName);
      } else return `${cohortName} already exists, please choose another name`;
    } else return 'Please follow the naming format of "Cohort [0-9][0-9]"';
    return this.cohorts;
  }

  removeCohort(cohortName) {
    if (this.allCohortNames.includes(cohortName)) {
      this.allCohortNames = this.allCohortNames.filter((cohorts) => cohorts !== cohortName);
      for (let i = 0; i < this.cohorts.length; i++) {
        if (this.cohorts[i][cohortName]) this.cohorts.splice(i, 1);
      }
    } else return `${cohortName} not found`;
  }

  viewCohort(cohortName) {
    let foundCohort;
    this.cohorts.forEach((cohort) => {
      if (Object.keys(cohort) == cohortName) {
        foundCohort = cohort;
      }
    });
    if (!foundCohort) return `${cohortName} not found`;
    return foundCohort[cohortName];
  }
}

// const cohortManager = new CohortManager();
// cohortManager.createCohort('Cohort 03');
// cohortManager.createCohort('Cohort 01');
// cohortManager.createCohort('Cohort 02');
// cohortManager.removeCohort('Cohort 01');
// console.log(cohortManager.viewCohort('Cohort 06'));
// console.log('cohorts', cohortManager.cohorts);
// console.log('allnames', cohortManager.allCohortNames);
// cohortManager.cohorts.splice(1, 1);
// cohortManager.allCohortNames = cohortManager.allCohortNames.filter((x) => x != 'Cohort 06');
// console.log('cohorts', cohortManager.cohorts);
// console.log('allnames', cohortManager.allCohortNames);

module.exports = CohortManager;
