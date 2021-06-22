//Задание 1




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
        this.perimeter = this.a + this.b + this.c;
        return this.perimeter;
    }

    getArea() {
        let halfPerimetr = this.perimeter / 2;
        this.area = Math.sqrt(halfPerimetr * (halfPerimetr - this.a) * (halfPerimetr - this.b) * (halfPerimetr - this.c)).toFixed(3);

    }
}

function getTriangle(a, b, c) {
    try {
        return new Triangle(a, b, c);
    } catch (err) {
        return {

        }
    }
}


