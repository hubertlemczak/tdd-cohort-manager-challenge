const cohorts = [
  {
    cohortOne: {
      students: [
        {
          studentId: 1,
          firstName: 'Hubert',
          lastName: 'Lemczak',
          githubUsername: 'hubertlemczak',
          email: 'hubertlemczak@gmail.com',
        },
      ],
    },
  },
  {
    cohortTwo: {
      students: [
        {
          studentId: 1,
          firstName: 'Hubert',
          lastName: 'Lemczak',
          githubUsername: 'hubertlemczak',
          email: 'hubertlemczak@gmail.com',
        },
        {
          studentId: 2,
          firstName: 'Hubert',
          lastName: 'Lemczak',
          githubUsername: 'hubertlemczak',
          email: 'hubertlemczak@gmail.com',
        },
      ],
      teachers: [
        {
          studentId: 1,
          firstName: 'Hubert',
          lastName: 'Lemczak',
          githubUsername: 'hubertlemczak',
          email: 'hubertlemczak@gmail.com',
        },
      ],
    },
  },
];

cohorts.push({ cohortThree: { students: [{}] } });
let cohortTwo;
const cohortName = 'cohortTwo';
// cohorts.forEach((cohort) => console.log(cohort[cohortName]));
cohorts.forEach((x) => {
  if (Object.keys(x) == cohortName) cohortTwo = x[cohortName];
});
// console.log(cohortTwo.students);
// cohortTwo.students.forEach((student) => console.log(student.firstName));
const wee = cohorts.forEach((x) => {
  let lol = x[Object.keys(x)].students;
  lol.forEach((x) => console.log(x.firstName));
});
