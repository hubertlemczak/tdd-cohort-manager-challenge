const Cohort = require('./cohort');
const Student = require('./student');

class CohortManager {
  constructor() {
    this.cohorts = [];
  }

  createCohort(cohortName) {
    const cohort = new Cohort(cohortName);
    if (/^Cohort \d\d/.test(cohortName)) {
      if (!this.getAllCohortNames().includes(cohortName)) {
        this.cohorts.push(cohort);
      } else return `${cohortName} already exists, please choose another name`;
    } else return 'Please follow the naming format of "Cohort [0-9][0-9]"';
    return cohort;
  }

  removeCohort(cohortName) {
    const index = this.getAllCohortNames().indexOf(cohortName);
    this.cohorts.splice(index, 1);
    return this;
  }

  addStudentToCohort(cohortName, firstName, lastName, github, email) {
    const student = new Student(firstName, lastName, github, email);
    if (!this.isCohort(cohortName)) throw new Error('Cohort does not exist');
    if (this.isStudent(firstName, lastName, github, email)) {
      throw new Error('Student already exists in a cohort');
    } else {
      const cohort = this.getCohort(cohortName);
      if (cohort.addStudent(student)) {
        throw new Error('Cohort at maximum capacity');
      }
    }
    return student;
  }

  removeStudentFromCohort(cohortName, firstName, lastName, github, email) {
    const cohort = this.getCohort(cohortName);
    if (!this.isCohort(cohortName)) throw new Error('Cohort does not exist');
    if (!this.isStudent(firstName, lastName, github, email)) {
      throw new Error('Student does not exist in a cohort');
    } else {
      const id = this.getStudentid(firstName, lastName, github, email);
      cohort.removeStudent(id);
    }
    return cohort.students;
  }

  cohortSort(reverse) {
    const cohorts = this.getAllCohortNames();
    if (!reverse) cohorts.sort();
    else cohorts.sort().reverse();
    return cohorts;
  }

  sortCohortStudents(cohortName, sort, reverse) {
    const cohort = this.getCohort(cohortName);
    const sortedStudents = cohort.studentSortBy(sort, reverse);
    return sortedStudents;
  }

  getCohort(cohortName) {
    let cohort;
    this.cohorts.forEach((x) => {
      if (x.name === cohortName) cohort = x;
    });
    return cohort;
  }

  getAllCohortNames() {
    const allCohortNames = [];
    this.cohorts.forEach((cohort) => allCohortNames.push(cohort.name));
    return allCohortNames;
  }

  getAllStudents() {
    const allStudents = [];
    this.cohorts.forEach((cohort) => {
      cohort.students.forEach((student) => allStudents.push(student));
    });
    return allStudents;
  }

  isCohort(cohortName) {
    let isCohort = false;
    if (this.getAllCohortNames().includes(cohortName)) isCohort = true;
    return isCohort;
  }

  isStudent(firstName, lastName, github, email) {
    let isStudent = false;
    this.getAllStudents().forEach((student) => {
      if (
        student.firstName === firstName &&
        student.lastName === lastName &&
        student.github === github &&
        student.email === email
      )
        isStudent = true;
    });
    return isStudent;
  }

  getStudentid(firstName, lastName, github, email) {
    let studentId;
    this.getAllStudents().forEach((student) => {
      if (
        student.firstName === firstName &&
        student.lastName === lastName &&
        student.github === github &&
        student.email === email
      )
        studentId = student.studentId;
    });
    return studentId;
  }

  studentSearch(firstName, lastName) {
    const foundStudents = [];
    this.cohorts.forEach((cohort) => {
      cohort.students.forEach((student) => {
        if (student.firstName === firstName && student.lastName === lastName) {
          foundStudents.push(student);
        }
      });
    });
    return foundStudents;
  }
}

// const cohortManager = new CohortManager();

module.exports = CohortManager;
