const CohortManager = require('./cohortManager');

class Cohort {
  constructor() {
    this.studentId = 1;
    this.allStudents = [];
  }

  addStudentToCohort(cohortName, firstName, lastName, github, email) {
    let studentsArr;
    const newStudent = {
      studentId: this.studentId++,
      firstName,
      lastName,
      github,
      email,
    };
    let isStudent;
    this.allStudents.forEach(
      (x) => (isStudent = x.firstName.includes(firstName) && x.lastName.includes(lastName))
    );
    if (!isStudent) {
      this.allStudents.push(newStudent);
      cohortManager.cohorts.forEach((x) => {
        studentsArr = x[Object.keys(x)].students;
        if (Object.keys(x) == cohortName) {
          studentsArr.push(newStudent);
        }
      });
    } else return 'This person is already a student in this cohort';
    return this.allStudents;
  }

  studentSortBy(cohortName, sort, reverse) {
    let names = [];
    cohortManager.viewCohort(cohortName).students.forEach((cohort) => {
      names.push(cohort[sort]);
    });

    if (sort === 'studentId') {
      if (!reverse) names.sort((a, b) => a - b);
      else names.sort((a, b) => b - a);
    } else {
      if (!reverse) names.sort();
      else names.sort().reverse();
    }

    const cohortStudents = cohortManager.viewCohort(cohortName).students;
    const sortedStudents = [];
    for (let i = 0; i < names.length; i++) {
      for (let j = 0; j < names.length; j++)
        if (names[i] === cohortStudents[j][sort]) {
          sortedStudents.push(cohortStudents[j]);
        }
    }
    return sortedStudents;
  }
}

// const cohort = new Cohort();
const cohortManager = new CohortManager();
// cohortManager.createCohort('Cohort 01');
// cohort.addStudentToCohort('Cohort 01', 'Bert', 'Lem', 'bertlem', 'bertl;em@sd.com');
// cohort.addStudentToCohort('Cohort 01', 'Aert', 'Lem', 'bertlem', 'aertl;em@sd.com');
// cohort.addStudentToCohort('Cohort 01', 'Cert', 'Lem', 'bertlem', 'certl;em@sd.com');
// cohort.addStudentToCohort('Cohort 01', 'Bert', 'Lem', 'bertlem', 'bertl;em@sd.com');
// cohort.addStudentToCohort('Cohort 01', 'Aert', 'Lem', 'bertlem', 'aertl;em@sd.com');
// cohort.addStudentToCohort('Cohort 01', 'Cert', 'Lem', 'bertlem', 'certl;em@sd.com');
// cohort.addStudentToCohort('Cohort 01', 'Bert', 'Lem', 'bertlem', 'bertl;em@sd.com');
// cohort.addStudentToCohort('Cohort 01', 'Aert', 'Lem', 'bertlem', 'aertl;em@sd.com');
// cohort.addStudentToCohort('Cohort 01', 'Cert', 'Lem', 'bertlem', 'certl;em@sd.com');
// cohort.addStudentToCohort('Cohort 01', 'Bert', 'Lem', 'bertlem', 'bertl;em@sd.com');
// cohort.addStudentToCohort('Cohort 01', 'Aert', 'Lem', 'bertlem', 'aertl;em@sd.com');
// cohort.addStudentToCohort('Cohort 01', 'Cert', 'Lem', 'bertlem', 'certl;em@sd.com');
// console.log(cohort.studentSortBy('Cohort 01', 'studentId', 'r'));

module.exports = Cohort;
