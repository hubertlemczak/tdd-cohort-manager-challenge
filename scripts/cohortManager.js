const Cohort = require('./cohort');
const Student = require('./student');

class CohortManager {
  constructor() {
    this.cohorts = [];
  }

  createCohort(cohortName) {
    const newcohort = new Cohort(cohortName);
    if (/^Cohort \d\d/.test(cohortName)) {
      if (!this.allCohortNames.includes(cohortName)) {
        this.cohorts.push(newcohort);
        this.allCohortNames.push(newcohort.name);
        console.log('all', this.allCohortNames);
      } else return `${cohortName} already exists, please choose another name`;
    } else return 'Please follow the naming format of "Cohort [0-9][0-9]"';
    return newcohort;
  }

  removeCohort(cohortName) {
    this.allCohortNames.splice(0, 1);
    console.log('cohorts', this.cohorts);
    console.log('all2', this.allCohortNames);
  }

  addStudentToCohort(cohortName, firstName, lastName, github, email) {
    const student = new Student(firstName.lastName, github, email);
    if (this.isStudent(firstName, lastName, github, email)) {
      throw new Error('Student already exists in a cohort');
    } else {
      //getCohort()
    }
  }

  // addStudentToCohort(cohortName, firstName, lastName, github, email) {
  //   console.log('cohorts', cohortManager.cohorts);
  //   const newStudent = {
  //     studentId: cohortName.slice(7) + studentId++,
  //     firstName,
  //     lastName,
  //     github,
  //     email,
  //   };

  //   if (!this.isStudent(firstName, lastName)) {
  //     cohortManager.cohorts.forEach((x) => {
  //       let studentsArr = x[Object.keys(x)].students;
  //       if (studentsArr.length <= this.cohortCapacity) {
  //         this.allStudents.push(newStudent);
  //         if (Object.keys(x) == cohortName) {
  //           studentsArr.push(newStudent);
  //           console.log(studentsArr);
  //         }
  //       } else return `${cohortName} is at maximum capacity`;
  //     });
  //   } else return 'This person is already a student in a cohort';
  //   return this.allStudents;
  // }

  getCohort(cohortName) {
    let cohort;
    this.cohorts.forEach((x) => {
      if (x.name === cohortName) cohort = x;
    });
    return cohort;
  }

  getAllCohortNames() {
    const allCohortNames = [];
    return allCohortNames;
  }

  getAllStudents() {
    const allStudents = [];
    return allStudents;
  }

  isCohort(cohortName) {
    let isCohort = false;
    if (this.getAllCohortNames().includes(cohortName)) {
      isCohort = true;
    }
    return isCohort;
  }

  isStudent(firstName, lastName, github, email) {
    let isStudent = false;
    this.getAllCohortNames().forEach((x) => {
      if (
        x.firstName === firstName &&
        x.lastName === lastName &&
        x.github === github &&
        x.email === email
      ) {
        isStudent = true;
      }
    });
    return isStudent;
  }

  // removeCohort(cohortName) {
  //   if (this.allCohortNames.includes(cohortName)) {
  //     this.allCohortNames = this.allCohortNames.filter((cohorts) => cohorts !== cohortName);
  //     for (let i = 0; i < this.cohorts.length; i++) {
  //       if (this.cohorts[i][cohortName]) this.cohorts.splice(i, 1);
  //     }
  //   } else return `${cohortName} not found`;
  // }

  // viewCohort(cohortName) {
  //   let foundCohort;
  //   this.cohorts.forEach((cohort) => {
  //     if (Object.keys(cohort) == cohortName) {
  //       foundCohort = cohort;
  //     }
  //   });
  //   if (!foundCohort) return `${cohortName} not found`;
  //   return foundCohort[cohortName];
  // }
}

const cohortManager = new CohortManager();
// cohortManager.createCohort('Cohort 03');
cohortManager.createCohort('Cohort 01');
cohortManager.removeCohort('Cohort 01');

// console.log(cohortManager.getCohort('Cohort 01'));
// console.log(cohortManager.cohorts);
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
