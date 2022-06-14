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
  -cohorts (Arr new instance(Cohorts))
  -allCohortNames (Arr cohortNames)
  -allStudents (Arr of Obj)
-METHODS:
  -createCohort(cohortName) => new instance in cohorts: new Cohort()
  -getCohort(cohortName) => finds instance of cohort
  -removeCohort(cohortName) => removes instance of cohort
  -addStudentToCohort(cohortName,f,l,g,e) => student = new Student(f,l,g,e)
  -removeStudentFromCohort(cohortName, id)
  -searchStudent(id) => found student
  -getAllCohortNames() => Arr of cohort names
  -getAllStudents() => Arr of students
  -isCohort(cohortName) => Boolean
  -isStudent(f,l,g,e) => Boolean


Class Cohort
-PROPERTIES(cohortName)
  -name
  -students(Arr)
  -capacity
-METHODS:
  -addStudent(student) => pushes student into students Arr
  -removeStudent(id) => removes student from students Arr
  -studentSortBy(sort, reverse) => sorted list of students


const id = 1;
Class Student
-PROPERTIES(firstName, lastName, github, email)
  -studentId = id++
  -firstName
  -lastName
  -github
  -email



















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
