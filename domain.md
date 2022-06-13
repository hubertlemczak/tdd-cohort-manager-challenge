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
















Class CohortManager
-PROPERTIES:
  -cohorts (Array new instance(Cohorts))
  -allCohortNames (Array cohortNames)
-METHODS:
  -createCohort(cohortName) => new instance in cohorts: new Cohort()

Cohort


Class Cohort
-PROPERTIES(cohortName)
  -name
  -students
  -capacity
-METHODS:
  -



















Class CohortManager
-PROPERTIES
  -cohorts (Array)
  -allCohortNames (Array)
-METHODS
  -createCohort(cohortName) => new Object in cohorts: { cohortName: { students: [], teachers: [] } }
  -viewCohort(cohortName) => new Object in foundCohort: { students: [], teachers: [] }
  -removerCohort(cohortName) => remove cohortName from allCohortNames Array and cohorts Array.

Class Cohort
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
