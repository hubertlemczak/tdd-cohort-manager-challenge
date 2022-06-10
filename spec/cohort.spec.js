const Cohort = require('../scripts/cohort');

describe('Cohort', () => {
  let cohort;
  beforeEach(() => {
    cohort = new Cohort();
  });

  it('Adds a new cohort', () => {
    const expected = [{ 'Cohort 05': { students: [], teachers: [] } }];
    const result = cohort.createCohort('Cohort 05');
    expect(result).toEqual(expected);
  });

  it('Checks if cohort name is valid', () => {
    const expected = 'Please follow the naming format of "Cohort [0-9][0-9]"';
    const result = cohort.createCohort('Cohort a');
    expect(result).toEqual(expected);
  });

  it('Checks if cohort name is already in use', () => {
    const expected = 'Cohort 09 already exists, please choose another name';
    cohort.createCohort('Cohort 09');
    const result = cohort.createCohort('Cohort 09');
    expect(result).toEqual(expected);
  });

  it('Searches for existing cohort', () => {
    const expected = { students: [], teachers: [] };
    cohort.createCohort('Cohort 01');
    cohort.createCohort('Cohort 02');
    const result = cohort.searchForCohort('Cohort 02');
    expect(result).toEqual(expected);
  });

  it('Searches for non-existent cohort', () => {
    const expected = 'Cohort 03 not found';
    cohort.createCohort('Cohort 01');
    cohort.createCohort('Cohort 02');
    const result = cohort.searchForCohort('Cohort 03');
    expect(result).toEqual(expected);
  });
});
