```
const cohorts = [
  {
    cohortName: {
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
];

Class Cohort
-PROPERTIES
  -cohorts (Array)
  -allCohortNames (Array)
-METHODS
  -createCohort(cohortName) => new Object in cohorts: { cohortName: { students: [], teachers: [] } }
  -searchForCohort(cohortName) => new Object in foundCohort: { cohortName: { students: [], teachers: [] } }

Class Student
-PROPERTIES
  -studentId (Integer)
  -allStudents (Array)
-METHODS
  -addStudentToCohort(cohortName,fname,lname,github,email) => new Object in cohort students Array:
  {
    studentId: studentId++,
    firstName: fname,
    lastName: lname,
    githubUsername: github,
    email: email,
  },

```
