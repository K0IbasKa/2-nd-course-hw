//№1
for (let i = 0; i < 2; i++) {
    console.log("Привет!");
}
//№2
for (let i = 1; i < 6; i++) {
    console.log(i);
}
//№3
for (let i = 7; i < 23; i++) {
    console.log(i);
}
//№4
let obj = {
    Коля: 200,
    Вася: 300,
    Петя: 400
}
for (let key in obj) {
    console.log(`${key} - зарплата ${obj[key]} долларов`);
}
//№5
let n = 2000;
let num = 0;
while (n > 50) {
    n /= 2;
    num++;
}
console.log(num);
//№6
let daysOfTheMonth = Number(prompt("Введите количество дней в месяце:"));
while (daysOfTheMonth < 28 && daysOfTheMonth > 31) {
    console.log("Введено неверное число дней в месяце!");
    daysOfTheMonth = Number(prompt("Введите количество дней в месяце:"));
}
let firstFriday = Number(prompt("Введите день первой пятницы месяца:"));
while (firstFriday < 1 || firstFriday > 7) {
    console.log("Введена неверная дата первой пятницы!");
    firstFriday = Number(prompt("Введите день первой пятницы месяца:"));
}
for (let i = 0; firstFriday + i * 7 <= 31; i++) {
    console.log(`Сегодня пятница, ${firstFriday + i * 7}-е число. Необходимо подготовить отчет.`);
}
