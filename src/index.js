function Student(name, surname, bdayYear) {
  this.name = name;
  this.surname = surname;
  this["Year of birth"] = bdayYear;
  this["Student's attedence"] = new Array(10);
  this["Student's marks"] = new Array(10);

  let attendenceCounter = 0;
  let marksCounter = 0;

  this.age = function () {
    let currentYear = new Date().getFullYear();
    let studentsAge = currentYear - this["Year of birth"];

    return studentsAge;
  };

  this.totalAverage = function () {
    let averageMarks = 0;

    for (let key in this["Student's marks"]) {
      averageMarks += this["Student's marks"][key];
    }

    return averageMarks /= marksCounter;
  };

  this.present = function () {
    try {
      if (attendenceCounter < 10) {
        this["Student's attedence"][attendenceCounter] = true;
        attendenceCounter++;
      } else throw new Error("невозможно отметить посещение - список переполнен.")
    } catch (error) {
      alert(error);
    }
  };

  this.absent = function () {
    try {
      if (attendenceCounter < 10) {
        this["Student's attedence"][attendenceCounter] = false;
        attendenceCounter++;
      } else throw new Error("невозможно отметить посещение - список переполнен.")
    } catch (error) {
      alert(error);
    }
  };

  this.mark = function (mark) {
    try {
      if (marksCounter < 10) {
        this["Student's marks"][marksCounter] = mark;
        marksCounter++;
      } else throw new Error("невозможно поставить оценку - список переполнен.")
    } catch (error) {
      alert(error);
    }
  };

  this.summary = function () {
    let result = {
      average: 0,
      attendence: 0
    };

    for (let counter = 0; counter < marksCounter; counter++) {
      result.average += this["Student's marks"][counter];
    }

    result.average /= marksCounter;

    for (let counter = 0; counter < attendenceCounter; counter++) {
      if (this["Student's attedence"][counter]) {
        result.attendence++;
      }
    }

    result.attendence /= attendenceCounter;

    if (result.average > 9 && result.attendence > 0.9) {
      return "Ути какой молодчинка!";
    } else if ((result.average < 9 && result.attendence > 0.9) || (result.average > 9 && result.attendence < 0.9)) {
      return "Норм, но можно лучше.";
    } else return "Редиска!";
  };
}

let vasya = new Student("Vasya", "Petrov", 1993);

console.log(vasya);