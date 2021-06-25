//Задание 1

function parseCount(value) {
    let count = Number.parseInt(value, 10);
    if (isNaN(count)) {
        throw new Error('Невалидное значение');
    }

    return count;
}

function validateCount(value) {
    try {
        return parseCount(value);
    } catch (err) {
        return err;
    }
}


//Задание 2

class Triangle {

    constructor(a, b, c) {
        if ((a + b) < c || (a + c) < b || (b + c) < a) {
            throw new Error('Треугольник с такими сторонами не существует');
        }

        this.a = a;
        this.b = b;
        this.c = c;
    }

    getPerimeter() {
        let perimeter = this.a + this.b + this.c;
        return perimeter;
    }

    getArea() {
        let halfPerimetr = this.perimeter / 2;
        let area = Math.sqrt(halfPerimetr * (halfPerimetr - this.a) * (halfPerimetr - this.b) * (halfPerimetr - this.c)).toFixed(3);
        let areaNumber = Number(area);
        return areaNumber;
    }
}

function getTriangle(a, b, c) {
    try {
        return new Triangle(a, b, c);
    } catch (err) {
        return {
            getPerimetr: (text) => { return text },
            getArea: (text) => { return text }
        }
    }
}


