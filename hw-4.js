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
for (let salary in obj) {
    console.log(`${salary} - зарплата ${obj[salary]} долларов`);
}
//№5
let n = 2000;
let num = 1;
while (n / 2 ** num > 50) {
    num++;
}
console.log(num);
//№6
let firstFriday = Number(prompt("Введите день первой пятницы месяца:"));
if (firstFriday >= 1 && firstFriday <= 7) {
    for (let i = 0; firstFriday + i * 7 <= 31; i++) {
        console.log(`Сегодня пятница, ${firstFriday + i * 7}-е число. Необходимо подготовить отчет.`);
    }
} else {
    console.log("Введено неверное число!");
}
