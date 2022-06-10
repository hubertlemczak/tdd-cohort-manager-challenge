const Student = require('../scripts/student');
const Cohort = require('../scripts/cohort');

describe('Student', () => {
  let student;
  let cohort;
  beforeEach(() => {
    student = new Student();
    cohort = new Cohort();
  });

  it('Student added to cohort', () => {
    const expected = [
      {
        studentId: 1,
        firstName: 'Test Name',
        lastName: 'Test Name',
        githubUsername: 'Test Username',
        email: 'Test@email.com',
      },
    ];
    cohort.createCohort('Cohort 01');
    const result = student.addStudentToCohort(
      'Cohort 01',
      'Test Name',
      'Test Name',
      'Test Username',
      'Test@email.com'
    );
    expect(result).toEqual(expected);
  });

  it('Student added to cohort that already exists', () => {
    const expected = 'This person is already a student';
    cohort.createCohort('Cohort 01');
    student.addStudentToCohort(
      'Cohort 01',
      'Test Name',
      'Test Name',
      'Test Username',
      'Test@email.com'
    );
    const result = student.addStudentToCohort(
      'Cohort 01',
      'Test Name',
      'Test Name',
      'Test Username',
      'Test@email.com'
    );
    expect(result).toEqual(expected);
  });
});
