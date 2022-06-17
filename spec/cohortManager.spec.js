const CohortManager = require('../scripts/cohortManager');

describe('Cohort Manager', () => {
  let cohortManager;
  beforeEach(() => {
    cohortManager = new CohortManager();
  });
  // Tests for createCohort()
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

  it('Checks if cohort name is valid', () => {
    const expected = 'Please follow the naming format of "Cohort [0-9][0-9]"';
    const result = cohortManager.createCohort();
    expect(result).toEqual(expected);
  });

  it('Checks if cohort name is already in use', () => {
    const expected = 'Cohort 01 already exists, please choose another name';
    cohortManager.createCohort('Cohort 01');
    const result = cohortManager.createCohort('Cohort 01');
    expect(result).toEqual(expected);
  });
  // Tests for removeCohort()
  it('Cohort successfully removed', () => {
    const expected = false;
    cohortManager.createCohort('Cohort 01');
    cohortManager.createCohort('Cohort 02');
    cohortManager.removeCohort('Cohort 01');
    const result = cohortManager.isCohort('Cohort 01');
    expect(result).toEqual(expected);
  });
  // Tests for addStudentToCohort()
  it('Student added to cohort', () => {
    const expected = {
      studentId: 1,
      firstName: 'Test',
      lastName: 'Name',
      github: 'testname',
      email: 'test@name.com',
    };
    cohortManager.createCohort('Cohort 01');
    const result = cohortManager.addStudentToCohort(
      'Cohort 01',
      'Test',
      'Name',
      'testname',
      'test@name.com'
    );
    expect(result.firstName).toEqual(expected.firstName);
    expect(result.lastName).toEqual(expected.lastName);
    expect(result.github).toEqual(expected.github);
    expect(result.email).toEqual(expected.email);
  });

  it('Add student throws Error: Cohort does not exist', () => {
    cohortManager.createCohort('Cohort 01');

    expect(() => {
      cohortManager.addStudentToCohort('Cohort 02', 'Test', 'Name', 'testname', 'test@name.com');
    }).toThrow(new Error('Cohort does not exist'));
  });

  it('Add student throws Error: Student already exists in a cohort', () => {
    cohortManager.createCohort('Cohort 01');
    cohortManager.addStudentToCohort('Cohort 01', 'Test', 'Name', 'testname', 'test@name.com');
    expect(() => {
      cohortManager.addStudentToCohort('Cohort 01', 'Test', 'Name', 'testname', 'test@name.com');
    }).toThrow(new Error('Student already exists in a cohort'));
  });

  it('Cohort reached max capacity', () => {
    cohortManager.createCohort('Cohort 01');
    for (let i = 0; i < 24; i++) {
      cohortManager.addStudentToCohort(
        'Cohort 01',
        'Student',
        String(i),
        'testname' + String(i),
        String(i) + 'test@name.com'
      );
    }
    expect(() => {
      cohortManager.addStudentToCohort('Cohort 01', 'Test', 'Name', 'testname', 'test@nam.com');
    }).toThrow(new Error('Cohort at maximum capacity'));
  });
  // Tests for removeStudentFromCohort()
  it('Student removed from cohort', () => {
    const expected = [];
    cohortManager.createCohort('Cohort 01');
    cohortManager.addStudentToCohort('Cohort 01', 'Test', 'Name', 'testname', 'test@name.com');
    const result = cohortManager.removeStudentFromCohort(
      'Cohort 01',
      'Test',
      'Name',
      'testname',
      'test@name.com'
    );
    expect(result).toEqual(expected);
  });

  it('Student rnot in cohort so cannot be removed', () => {
    cohortManager.createCohort('Cohort 01');
    expect(() => {
      cohortManager.removeStudentFromCohort(
        'Cohort 01',
        'Test',
        'Name',
        'testname',
        'test@name.com'
      );
    }).toThrow(new Error('Student does not exist in a cohort'));
  });

  it('Remove student throws Error: Cohort does not exist', () => {
    expect(() => {
      cohortManager.removeStudentFromCohort(
        'Cohort 01',
        'Test',
        'Name',
        'testname',
        'test@name.com'
      );
    }).toThrow(new Error('Cohort does not exist'));
  });

  it('Remove student throws Error: Student does not exist in a cohort', () => {
    cohortManager.createCohort('Cohort 01');
    expect(() => {
      cohortManager.removeStudentFromCohort(
        'Cohort 01',
        'Test',
        'Name',
        'testname',
        'test@name.com'
      );
    }).toThrow(new Error('Student does not exist in a cohort'));
  });
  // Tests for isCohort()
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
  // Tests for isStudent()
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
  // Tests for getCohort()
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
  // Tests for cohortSort()
  it('Sorts all cohorts', () => {
    const expected = ['Cohort 01', 'Cohort 02', 'Cohort 03', 'Cohort 12', 'Cohort 22'];
    cohortManager.createCohort('Cohort 01');
    cohortManager.createCohort('Cohort 22');
    cohortManager.createCohort('Cohort 02');
    cohortManager.createCohort('Cohort 12');
    cohortManager.createCohort('Cohort 03');
    const result = cohortManager.cohortSort();
    expect(result).toEqual(expected);
  });

  it('Sorts all cohorts reversed', () => {
    const expected = ['Cohort 22', 'Cohort 12', 'Cohort 03', 'Cohort 02', 'Cohort 01'];
    cohortManager.createCohort('Cohort 01');
    cohortManager.createCohort('Cohort 22');
    cohortManager.createCohort('Cohort 02');
    cohortManager.createCohort('Cohort 12');
    cohortManager.createCohort('Cohort 03');
    const result = cohortManager.cohortSort('r');
    expect(result).toEqual(expected);
  });
  // Tests for sortCohortStudents()
  it('Sorts all students by studentId reversed', () => {
    cohortManager.createCohort('Cohort 01');
    cohortManager.addStudentToCohort('Cohort 01', 'Test', 'Name', 'testname', 'test@name.com');
    cohortManager.addStudentToCohort('Cohort 01', 'AestOne', 'Name', 'testname', 'test@name.com');
    cohortManager.addStudentToCohort('Cohort 01', 'BestTwo', 'Name', 'testname', 'test@name.com');
    const result = cohortManager.sortCohortStudents('Cohort 01', 'studentId', 'r');
    expect(result[0].firstName).toEqual('BestTwo');
    expect(result[1].firstName).toEqual('AestOne');
    expect(result[2].firstName).toEqual('Test');
  });

  it('Sorts all students by lastName', () => {
    cohortManager.createCohort('Cohort 01');
    cohortManager.addStudentToCohort('Cohort 01', 'Test', 'Aame', 'testname', 'test@name.com');
    cohortManager.addStudentToCohort('Cohort 01', 'AestOne', 'Bame', 'testname', 'test@name.com');
    cohortManager.addStudentToCohort('Cohort 01', 'BestTwo', 'Came', 'testname', 'test@name.com');
    const result = cohortManager.sortCohortStudents('Cohort 01', 'lastName');
    expect(result[0].lastName).toEqual('Aame');
    expect(result[1].lastName).toEqual('Bame');
    expect(result[2].lastName).toEqual('Came');
  });

  it('Sorts all students by lastName reversed', () => {
    cohortManager.createCohort('Cohort 01');
    cohortManager.addStudentToCohort('Cohort 01', 'Test', 'Aame', 'testname', 'test@name.com');
    cohortManager.addStudentToCohort('Cohort 01', 'AestOne', 'Bame', 'testname', 'test@name.com');
    cohortManager.addStudentToCohort('Cohort 01', 'BestTwo', 'Came', 'testname', 'test@name.com');
    const result = cohortManager.sortCohortStudents('Cohort 01', 'lastName', 'r');
    expect(result[0].lastName).toEqual('Came');
    expect(result[1].lastName).toEqual('Bame');
    expect(result[2].lastName).toEqual('Aame');
  });
  // Tests for sortCohortStudents()
  it('Searches for students by first and last name', () => {
    const expected = [
      {
        firstName: 'Test',
        lastName: 'Name',
        github: 'iShouldBeHere',
        email: 'test@name.com',
      },
      {
        firstName: 'Test',
        lastName: 'Name',
        github: 'iShouldBeHere',
        email: 'test@names.com',
      },
    ];
    cohortManager.createCohort('Cohort 01');
    cohortManager.createCohort('Cohort 02');
    cohortManager.addStudentToCohort('Cohort 01', 'Test', 'Name', 'iShouldBeHere', 'test@name.com');
    cohortManager.addStudentToCohort(
      'Cohort 01',
      'Name',
      'Test',
      'iShouldNotBeHere',
      'test@name.com'
    );
    cohortManager.addStudentToCohort(
      'Cohort 01',
      'BeestTwo',
      'Came',
      'iShouldNotBeHere',
      'test@name.com'
    );
    cohortManager.addStudentToCohort(
      'Cohort 02',
      'BestTwo',
      'Casme',
      'iShouldNotBeHere',
      'test@name.com'
    );
    cohortManager.addStudentToCohort(
      'Cohort 02',
      'Test',
      'Name',
      'iShouldBeHere',
      'test@names.com'
    );
    const result = cohortManager.studentSearch('Test', 'Name');
    expect(result[0].firstName).toEqual(expected[0].firstName);
    expect(result[0].lastName).toEqual(expected[0].lastName);
    expect(result[1].firstName).toEqual(expected[1].firstName);
    expect(result[1].lastName).toEqual(expected[1].lastName);
  });
});
