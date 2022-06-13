const Cohort = require('../scripts/cohort');
const CohortManager = require('../scripts/cohortManager');

describe('Cohort', () => {
  let cohortManager;
  let cohort;

  beforeEach(() => {
    cohortManager = new CohortManager();
    cohort = new Cohort();
  });

  it('Student added to cohort', () => {
    const expected = [
      {
        studentId: 1,
        firstName: 'Test Name',
        lastName: 'Test Name',
        github: 'Test Username',
        email: 'Test@email.com',
      },
    ];
    const newCohort = cohortManager.createCohort('Cohort 01');
    console.log('newCohort', newCohort);
    const result = cohort.addStudentToCohort(
      'Cohort 01',
      'Test Name',
      'Test Name',
      'Test Username',
      'Test@email.com'
    );
    expect(result).toEqual(expected);
  });

  // it('Student added to cohort that they already exist in', () => {
  //   const expected = 'This person is already a student in this cohort';
  //   cohortManager.createCohort('Cohort 01');
  //   cohort.addStudentToCohort(
  //     'Cohort 01',
  //     'Test Name',
  //     'Test Name',
  //     'Test Username',
  //     'Test@email.com'
  //   );
  //   const result = cohort.addStudentToCohort(
  //     'Cohort 01',
  //     'Test Name',
  //     'Test Name',
  //     'Test Username',
  //     'Test@email.com'
  //   );
  //   expect(result).toEqual(expected);
  // });
});
