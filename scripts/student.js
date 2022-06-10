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

  studentSortBy(cohortName, sort, reverse) {
    let names = [];
    cohort.viewCohort(cohortName).students.forEach((student) => {
      names.push(student[sort]);
    });
    if (sort === 'studentId') {
      if (!reverse) names.sort((a, b) => a - b);
      else names.sort((a, b) => b - a);
    } else {
      if (!reverse) names.sort();
      else names.sort().reverse();
    }

    const student = cohort.viewCohort(cohortName).students;
    const sortedStudents = [];
    for (let i = 0; i < names.length; i++) {
      for (let j = 0; j < names.length; j++)
        if (names[i] === student[j][sort]) {
          sortedStudents.push(student[j]);
        }
    }
    return sortedStudents;
  }
}

const student = new Student();
const cohort = new Cohort();
cohort.createCohort('Cohort 01');
student.addStudentToCohort('Cohort 01', 'Bert', 'Lem', 'bertlem', 'bertl;em@sd.com');
student.addStudentToCohort('Cohort 01', 'Aert', 'Lem', 'bertlem', 'aertl;em@sd.com');
student.addStudentToCohort('Cohort 01', 'Cert', 'Lem', 'bertlem', 'certl;em@sd.com');
student.addStudentToCohort('Cohort 01', 'Bert', 'Lem', 'bertlem', 'bertl;em@sd.com');
student.addStudentToCohort('Cohort 01', 'Aert', 'Lem', 'bertlem', 'aertl;em@sd.com');
student.addStudentToCohort('Cohort 01', 'Cert', 'Lem', 'bertlem', 'certl;em@sd.com');
student.addStudentToCohort('Cohort 01', 'Bert', 'Lem', 'bertlem', 'bertl;em@sd.com');
student.addStudentToCohort('Cohort 01', 'Aert', 'Lem', 'bertlem', 'aertl;em@sd.com');
student.addStudentToCohort('Cohort 01', 'Cert', 'Lem', 'bertlem', 'certl;em@sd.com');
student.addStudentToCohort('Cohort 01', 'Bert', 'Lem', 'bertlem', 'bertl;em@sd.com');
student.addStudentToCohort('Cohort 01', 'Aert', 'Lem', 'bertlem', 'aertl;em@sd.com');
student.addStudentToCohort('Cohort 01', 'Cert', 'Lem', 'bertlem', 'certl;em@sd.com');
console.log(student.studentSortBy('Cohort 01', 'studentId', 'r'));

module.exports = Student;
