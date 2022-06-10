const Cohort = require('./cohort');

class Student {
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
      githubUsername: github,
      email,
    };
    let isStudent;
    this.allStudents.forEach((x) => (isStudent = x.email.includes(email)));
    console.log(isStudent);
    if (!isStudent) {
      this.allStudents.push(newStudent);
      cohort.cohorts.forEach((x) => {
        studentsArr = x[Object.keys(x)].students;
        if (Object.keys(x) == cohortName) {
          studentsArr.push(newStudent);
        }
      });
    } else return 'This person is already a student';
    return this.allStudents;
  }
}

const student = new Student();
const cohort = new Cohort();
cohort.createCohort('Cohort 01');
student.addStudentToCohort('Cohort 01', 'Bert', 'Lem', 'bertlem', 'bertl;em@sd.com');
console.log(student.addStudentToCohort('Cohort 01', 'Bert', 'Lem', 'bertlem', 'bertl;em@sd.coms'));

console.log(student.addStudentToCohort('Cohort 01', 'Bert', 'Lem', 'bertlem', 'bertl;em@sd.com'));
// console.log(cohort.searchForCohort('Cohort 01'));

module.exports = Student;
