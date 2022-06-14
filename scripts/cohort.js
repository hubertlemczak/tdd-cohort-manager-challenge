class Cohort {
  constructor(name) {
    this.name = name;
    this.students = [];
    this.teachers = [];
    this.cohortCapacity = 24;
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
  //   } else return 'This person is already a student in this cohort';
  //   return this.allStudents;
  // }

  // studentSortBy(cohortName, sort, reverse) {
  //   let names = [];
  //   cohortManager.viewCohort(cohortName).students.forEach((cohort) => {
  //     names.push(cohort[sort]);
  //   });

  //   if (sort === 'studentId') {
  //     if (!reverse) names.sort((a, b) => a - b);
  //     else names.sort((a, b) => b - a);
  //   } else {
  //     if (!reverse) names.sort();
  //     else names.sort().reverse();
  //   }

  //   const cohortStudents = cohortManager.viewCohort(cohortName).students;
  //   const sortedStudents = [];
  //   for (let i = 0; i < names.length; i++) {
  //     for (let j = 0; j < names.length; j++)
  //       if (names[i] === cohortStudents[j][sort]) {
  //         sortedStudents.push(cohortStudents[j]);
  //       }
  //   }
  //   return sortedStudents;
  // }
}

// const cohort = new Cohort();
// cohort.addStudentToCohort('Cohort 01', 'Test Nam', 'Test Name', 'Test Username', 'Test@email.com');
// cohort.addStudentToCohort('Cohort 01', 'Test Na', 'Test Name', 'Test Username', 'Test@email.com');
// cohort.addStudentToCohort('Cohort 02', 'Test Name', 'Test Name', 'Test Username', 'Test@email.com');

module.exports = Cohort;
