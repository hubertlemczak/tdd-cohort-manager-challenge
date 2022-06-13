const CohortManager = require('../scripts/cohortManager');

describe('Cohort Manager', () => {
  let cohortManager;

  beforeEach(() => {
    cohortManager = new CohortManager();
  });

  it('Adds a new cohort', () => {
    const expected = [{ 'Cohort 05': { students: [], teachers: [] } }];
    const result = cohortManager.createCohort('Cohort 05');
    expect(result).toEqual(expected);
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
    const expected = { students: [], teachers: [] };
    cohortManager.createCohort('Cohort 01');
    cohortManager.createCohort('Cohort 02');
    const result = cohortManager.viewCohort('Cohort 02');
    expect(result).toEqual(expected);
  });

  it('Searches for non-existent cohort', () => {
    const expected = 'Cohort 03 not found';
    cohortManager.createCohort('Cohort 01');
    cohortManager.createCohort('Cohort 02');
    const result = cohortManager.viewCohort('Cohort 03');
    expect(result).toEqual(expected);
  });

  it('Cohort successfully removed', () => {
    const expected = [{ 'Cohort 02': { students: [], teachers: [] } }];
    cohortManager.createCohort('Cohort 01');
    cohortManager.createCohort('Cohort 02');
    cohortManager.removeCohort('Cohort 01');
    const result = cohortManager.cohorts;
    expect(result).toEqual(expected);
  });

  it('Searches for non-existent cohort because it has been removed', () => {
    const expected = 'Cohort 01 not found';
    cohortManager.createCohort('Cohort 01');
    cohortManager.createCohort('Cohort 02');
    cohortManager.removeCohort('Cohort 01');
    const result = cohortManager.viewCohort('Cohort 01');
    expect(result).toEqual(expected);
  });
});
