//№1
let a = 10;
alert(a);
alert(a = 20);
//№2
const iPhoneIReleaseRate = 2009;
alert(iPhoneIReleaseRate);
//№3
const creatorName = 'Брендан';
alert(creatorName);
//№4
let value1 = 10;
let value2 = 2;
alert(value1 + value2);
alert(value1 - value2);
alert(value2 - value1);
alert(value1 * value2);
alert(value1 / value2);
alert(value2 / value1);
//№5
let result = value2 ** 5;
alert(result);
//№6
a = 9;
let b = 2;
alert(a % b);
//№7
let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
num += 1;
num -= 1;
alert(num);
//№8
let age = Number(prompt("Сколько вам лет?", "введите число"));
alert(age);
//№9
let user = {
    name: 'Иван',
    age: 22,
    isAdmin: true,
    "city of residence": 'Раменское'
}
user.age++;
delete user['city of residence'];
let info = prompt("Какую информацию хотите узнать о пользователе?", "введите название одного из полей объекта");
alert(user[info]);
//№10
let userName = prompt("Введите имя пользователя");
alert(`Привет, ${userName}!`);