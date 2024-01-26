//№1
const comparison = (value1, value2) => (value1 >= value1) ? a : b
//№2
const parity = (value) => (value % 2) === 0 ? console.log("Число четное") : console.log("Число нечетное");
//№3
const squareOut = (value) => console.log(value ** 2);
const squareReturn = (value) => value ** 2;
//№4
const greetings = (value = Number(prompt("Сколько тебе лет?"))) => value <= 12 ? alert("Привет, друг!") : alert("Добро пожаловать!")
//№5
const checkingNumbers = (value1, value2) => !(isNaN(Number(value1)) || isNaN(Number(value2))) ? value1 * value2 : 'Одно или оба значения не являются числом'
//№6
const cube = (value = Number(prompt("Введите число n:"))) => !isNaN(value) ? `n в кубе равняется ${value ** 3}` : 'Переданный параметр не является числом'
console.log(cube(1));
console.log(cube(2));
console.log(cube(3));
console.log(cube(4));
console.log(cube(5));
console.log(cube(6));
console.log(cube(7));
console.log(cube(8));
console.log(cube(9));
console.log(cube(10));
console.log(cube('привет'));
//№7
const PI = 3.1415926535;
function getArea() {
    return PI * this.radius ** 2;
}
function getPerimeter() {
    return 2 * PI * this.radius;
}
const circle1 = {
    radius: 10,
    getArea: getArea,
    getPerimeter: getPerimeter
}
const circle2 = {
    radius: 20,
    getArea: getArea,
    getPerimeter: getPerimeter
}
console.log(`радиус 1: ${circle1.getArea()}`);
console.log(`радиус 2: ${circle2.getArea()}`);
console.log(`периметр 1: ${circle1.getPerimeter()}`);
console.log(`периметр 2: ${circle2.getPerimeter()}`);
//№8
const seasons = (monthNumber = Number(prompt("Введите номер месяца:", "введите число"))) => {
    if (isNaN(monthNumber)) return 'Вы ввели неверные данные!';
    switch (monthNumber) {
        case 1:
        case 2:
        case 12:
            return ("Зима");
        case 3:
        case 4:
        case 5:
            return ("Весна");
        case 6:
        case 7:
        case 8:
            return ("Лето");
        case 9:
        case 10:
        case 11:
            return ("Осень");
        default:
            return 'Вы ввели неверный номер месяца!';
    }
}
