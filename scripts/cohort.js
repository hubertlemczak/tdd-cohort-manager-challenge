const Student = require('./student');

let studentId = 1;
class Cohort {
  constructor(name) {
    this.name = name;
    this.students = [];
    this.cohortCapacity = 24;
  }

  addStudentToCohort(cohortName, firstName, lastName, github, email) {
    console.log('cohorts', cohortManager.cohorts);
    const newStudent = {
      studentId: cohortName.slice(7) + studentId++,
      firstName,
      lastName,
      github,
      email,
    };

    if (!this.isStudent(firstName, lastName)) {
      cohortManager.cohorts.forEach((x) => {
        let studentsArr = x[Object.keys(x)].students;
        if (studentsArr.length <= this.cohortCapacity) {
          this.allStudents.push(newStudent);
          if (Object.keys(x) == cohortName) {
            studentsArr.push(newStudent);
            console.log(studentsArr);
          }
        } else return `${cohortName} is at maximum capacity`;
      });
    } else return 'This person is already a student in this cohort';
    return this.allStudents;
  }

  isStudent(firstName, lastName) {
    let isStudent = false;
    this.allStudents.forEach((x) => {
      if (x.firstName === firstName && x.lastName === lastName) {
        isStudent = true;
      }
    });
    return isStudent;
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
// const cohortManager = new CohortManager();
// cohortManager.createCohort('Cohort 01');
// cohortManager.createCohort('Cohort 02');
// cohort.addStudentToCohort('Cohort 01', 'Test Nam', 'Test Name', 'Test Username', 'Test@email.com');
// cohort.addStudentToCohort('Cohort 01', 'Test Na', 'Test Name', 'Test Username', 'Test@email.com');
// cohort.addStudentToCohort('Cohort 02', 'Test Name', 'Test Name', 'Test Username', 'Test@email.com');
// console.log('hh', cohortManager.cohorts[0]['Cohort 01'].students);

// console.log('pp', cohortManager.cohorts[1]['Cohort 02'].students);
// console.log('COHORT', cohortManager.cohorts);

module.exports = Cohort;
