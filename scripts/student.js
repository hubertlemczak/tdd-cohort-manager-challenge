let id = 1;

class Student {
  constructor(firstName, lastName, github, email) {
    this.studentId = id++;
    this.firstName = firstName;
    this.lastName = lastName;
    this.github = github;
    this.email = email;
  }
}

module.exports = Student;
