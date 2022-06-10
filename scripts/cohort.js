// const cohorts = [
//   {
//     cohortOne: {
//       students: [
//         {
//           studentId: 1,
//           firstName: 'Hubert',
//           lastName: 'Lemczak',
//           githubUsername: 'hubertlemczak',
//           email: 'hubertlemczak@gmail.com',
//         },
//         {
//           studentId: 2,
//           firstName: 'Hubert',
//           lastName: 'Lemczak',
//           githubUsername: 'hubertlemczak',
//           email: 'hubertlemczak@gmail.com',
//         },
//       ],
//       teachers: [
//         {
//           studentId: 1,
//           firstName: 'Hubert',
//           lastName: 'Lemczak',
//           githubUsername: 'hubertlemczak',
//           email: 'hubertlemczak@gmail.com',
//         },
//       ],
//     },
//   },
// ];
// const cohorts = require('./cohorts');
// cohorts.push({
//   cohortThree: {
//     students: [
//       {
//         studentId: 1,
//         firstName: 'Hubert',
//         lastName: 'Lemczak',
//         githubUsername: 'hubertlemczak',
//         email: 'hubertlemczak@gmail.com',
//       },
//     ],
//   },
// });
// console.log(cohorts);
// let cohortTwo;
// const cohortName = 'cohortTwo';
// // cohorts.forEach((cohort) => console.log(cohort[cohortName]));
// cohorts.forEach((x) => {
//   if (Object.keys(x) == cohortName) cohortTwo = x[cohortName];
// });
// // console.log(cohortTwo.students);
// // cohortTwo.students.forEach((student) => console.log(student.firstName));
// cohorts.forEach((x) => {
//   let students = x[Object.keys(x)].students;
//   students.forEach((x) => console.log(x.githubUsername));
// });

class Cohort {
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
  searchForCohort(cohortName) {
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

// const cohort = new Cohort();
// cohort.createCohort('Cohort 05');
// cohort.createCohort('Cohort 06');
// console.log(cohort.searchForCohort('Cohort 06'));

module.exports = Cohort;
