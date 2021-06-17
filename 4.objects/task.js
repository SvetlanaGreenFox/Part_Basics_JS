function Student(name, gender, age) {
  // Ваш код
  this.name = name;
  this.gender = gender;
  this.age = age;
}

Student.prototype.setSubject = function (subjectName) {
  //ваш код
  this.subject = subjectName;
}

Student.prototype.addMark = function (mark) {
  if (this.marks === undefined) {
    this.marks = [];
    this.marks.push(mark);
  }
}

Student.prototype.addMarks = function (...marks) {
  for (let i = 0; i < marks.length; i++) {
    this.marks.push(marks[i]);
  }
}


Student.prototype.getAverage = function () {
  let count = 0;
  let average = count / this.marks.length;
  for (let i = 0; i < this.marks.length; i++) {
    count = count + this.marks[i];
  }
  return average;
}

Student.prototype.exclude = function (reason) {
  delete this.subject;
  delete this.marks;

  this.reason = reason;
}

