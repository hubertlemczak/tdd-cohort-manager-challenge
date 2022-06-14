class Cohort {
  constructor(name) {
    this.name = name;
    this.students = [];
    this.teachers = [];
    this.cohortCapacity = 24;
  }

  addStudent(student) {
    let bool = false;
    if (this.students.length < this.cohortCapacity) this.students.push(student);
    else bool = true;
    return bool;
  }

  removeStudent(id) {
    this.students.forEach((student, index) => {
      if (student.studentId === id) this.students.splice(index, 1);
    });
  }

  studentSortBy(sort, reverse) {
    let sortBy = [];
    this.students.forEach((student) => sortBy.push(student[sort]));

    if (sort === 'studentId') {
      if (!reverse) sortBy.sort((a, b) => a - b);
      else sortBy.sort((a, b) => b - a);
    } else {
      if (!reverse) sortBy.sort();
      else sortBy.sort().reverse();
    }

    const sortedStudents = [];
    for (let i = 0; i < sortBy.length; i++) {
      for (let j = 0; j < sortBy.length; j++)
        if (sortBy[i] === this.students[j][sort]) {
          sortedStudents.push(this.students[j]);
        }
    }
    return sortedStudents;
  }
}

module.exports = Cohort;
