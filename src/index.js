function Student(name, surname, bdayYear) {
    const maxAttedence = 10;
    const maxRatings = 10;
    const passingScoreMarks = 9;
    const passingScoreAttedence = 0.9;
    let attendenceCounter = 0;
    let marksCounter = 0;

    this.name = name;
    this.surname = surname;
    this['Year of birth'] = bdayYear;
    this['Students attedence'] = new Array(maxAttedence);
    this['Students marks'] = new Array(maxRatings);

    this.age = function () {
        const currentYear = new Date().getFullYear();
        const studentsAge = currentYear - this['Year of birth'];

        return studentsAge;
    };

    this.totalAverage = function () {
        let averageMarks = 0;

        for (const key in this['Students marks']) {
            averageMarks += this['Students marks'][key];
        }

        return averageMarks /= marksCounter;
    };

    this.present = function () {
        try {
            if (attendenceCounter < maxAttedence) {
                this['Students attedence'][attendenceCounter] = true;
                attendenceCounter++;
            } else throw new Error('невозможно отметить посещение - список переполнен.');
        } catch (error) {
            alert(error);
        }
    };

    this.absent = function () {
        try {
            if (attendenceCounter < maxAttedence) {
                this['Students attedence'][attendenceCounter] = false;
                attendenceCounter++;
            } else throw new Error('невозможно отметить посещение - список переполнен.');
        } catch (error) {
            alert(error);
        }
    };

    this.mark = function (mark) {
        try {
            if (marksCounter < maxRatings) {
                this['Students marks'][marksCounter] = mark;
                marksCounter++;
            } else throw new Error('невозможно поставить оценку - список переполнен.');
        } catch (error) {
            alert(error);
        }
    };

    this.summary = function () {
        const result = {
            average: 0,
            attendence: 0
        };

        for (let counter = 0; counter < marksCounter; counter++) {
            result.average += this['Students marks'][counter];
        }

        result.average /= marksCounter;

        for (let counter = 0; counter < attendenceCounter; counter++) {
            if (this['Students attedence'][counter]) {
                result.attendence++;
            }
        }

        result.attendence /= attendenceCounter;

        if (result.average > passingScoreMarks && result.attendence > passingScoreAttedence) {
            return 'Ути какой молодчинка!';
        } else if ((result.average < passingScoreMarks && result.attendence > passingScoreAttedence) ||
            (result.average > passingScoreMarks && result.attendence < passingScoreAttedence)) {
            return 'Норм, но можно лучше.';
        } else return 'Редиска!';
    };
}

const student = new Student('Vasya', 'Petrov', '1994');

student.present();