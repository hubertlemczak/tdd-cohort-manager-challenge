const CohortManager = require('../scripts/cohortManager');

describe('Cohort Manager', () => {
  let cohortManager;

  beforeEach(() => {
    cohortManager = new CohortManager();
  });

  it('Adds a new cohort', () => {
    const expected = { name: 'Cohort 01', students: [], teachers: [], cohortCapacity: 24 };
    const result = cohortManager.createCohort('Cohort 01');
    expect(result.name).toEqual(expected.name);
    expect(result.students).toEqual(expected.students);
    expect(result.teachers).toEqual(expected.teachers);
    expect(result.cohortCapacity).toEqual(expected.cohortCapacity);
  });

  it('Checks if cohort name is valid', () => {
    const expected = 'Please follow the naming format of "Cohort [0-9][0-9]"';
    const result = cohortManager.createCohort('Cohort a');
    expect(result).toEqual(expected);
  });

  it('Checks if cohort name is already in use', () => {
    const expected = 'Cohort 09 already exists, please choose another name';
    cohortManager.createCohort('Cohort 09');
    const result = cohortManager.createCohort('Cohort 09');
    expect(result).toEqual(expected);
  });

  it('Searches for existing cohort', () => {
    const expected = true;
    cohortManager.createCohort('Cohort 01');
    cohortManager.createCohort('Cohort 02');
    const result = cohortManager.isCohort('Cohort 02');
    expect(result).toEqual(expected);
  });

  it('Searches for non-existent cohort', () => {
    const expected = false;
    cohortManager.createCohort('Cohort 01');
    cohortManager.createCohort('Cohort 02');
    const result = cohortManager.isCohort('Cohort 03');
    expect(result).toEqual(expected);
  });

  it('Searches for existing student', () => {
    const expected = true;
    cohortManager.createCohort('Cohort 01');
    cohortManager.addStudentToCohort('Cohort 01', 'Test', 'Name', 'testname', 'test@name.com');
    const result = cohortManager.isStudent('Test', 'Name', 'testname', 'test@name.com');
    expect(result).toEqual(expected);
  });

  it('Searches for non-existent student', () => {
    const expected = false;
    cohortManager.createCohort('Cohort 01');
    const result = cohortManager.isStudent('Test', 'Name', 'testname', 'test@name.com');
    expect(result).toEqual(expected);
  });

  it('Gets cohort', () => {
    const expected = {
      name: 'Cohort 01',
      students: [],
      teachers: [],
      cohortCapacity: 24,
    };
    cohortManager.createCohort('Cohort 01');
    const result = cohortManager.getCohort('Cohort 01');
    expect(result.name).toEqual(expected.name);
    expect(result.students).toEqual(expected.students);
    expect(result.teachers).toEqual(expected.teachers);
    expect(result.cohortCapacity).toEqual(expected.cohortCapacity);
  });

  // it('Cohort successfully removed', () => {
  //   const expected = [{ 'Cohort 02': { students: [], teachers: [] } }];
  //   cohortManager.createCohort('Cohort 01');
  //   cohortManager.createCohort('Cohort 02');
  //   cohortManager.removeCohort('Cohort 01');
  //   const result = cohortManager.cohorts;
  //   expect(result).toEqual(expected);
  // });

  // it('Searches for non-existent cohort because it has been removed', () => {
  //   const expected = 'Cohort 01 not found';
  //   cohortManager.createCohort('Cohort 01');
  //   cohortManager.createCohort('Cohort 02');
  //   cohortManager.removeCohort('Cohort 01');
  //   const result = cohortManager.viewCohort('Cohort 01');
  //   expect(result).toEqual(expected);
  // });
});
