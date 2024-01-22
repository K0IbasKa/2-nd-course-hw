//№1
let password = 'qwe123';
let keyPassword = String(prompt("Введите пароль"));
keyPassword === password ? alert("Пароль введен верно") : alert("Пароль введен неправильно");
//№2
let c = Number(prompt("Введите число большее 0 и меньшее 10"));
(c > 0 && c < 10) ? alert("Верно") : alert("Неверно");
//№3
let d = Number(prompt("Введите первое число"));
let e = Number(prompt("Введите второе число"));
(d > 100 || e > 100) ? alert("Верно") : alert("Неверно");
//№4
let a = '2';
let b = '3';
alert(Number('5'));
alert(Number(a) + Number(b));
//№5
let monthNumber = Number(prompt("Введите номер месяца"));
switch (monthNumber) {
    case 1:
    case 2:
    case 12:
        alert("сезон - зима");
        break;
    case 3:
    case 4:
    case 5:
        alert("сезон - весна");
        break;
    case 6:
    case 7:
    case 8:
        alert("сезон - лето");
        break;
    case 9:
    case 10:
    case 11:
        alert("сезон - осень");
        break;
    default:
        alert("Введен неверный номер");
        break;
}
//№7
let parity = Number(prompt("Введите любое число"));
(parity % 2 == 1) ? alert("Число нечетное") : alert("Число четное");
//№8
let clientOS = Number(prompt("Введите введите код ОС, где 0 — iOS, 1 — Android"));
switch (clientOS) {
    case 0:
        alert("Установите версию приложения для iOS по ссылке");
        break;
    case 1:
        alert("Установите версию приложения для Android по ссылке");
        break;
    default:
        alert("Введен неверный номер ОС");
        break;
}
//№9
clientOS = Number(prompt("Введите введите код ОС, где 0 — iOS, 1 — Android"));
let clientDeviceYear = Number(prompt("Введите год выпуска мобильного устройства"));
switch (clientOS) {
    case 0:
        if (clientDeviceYear < 2024 && clientDeviceYear >= 2015) {
            alert("Установите версию приложения для iOS по ссылке");
        } else if (clientDeviceYear < 2015 && clientDeviceYear >= 1994) {
            alert("Установите облегченную версию приложения для iOS по ссылке")
        } else {
            alert("Введен неверный год выпуска");
        }
        break;
    case 1:
        if (clientDeviceYear < 2024 && clientDeviceYear >= 2015) {
            alert("Установите версию приложения для Android по ссылке");
        } else if (clientDeviceYear < 2015 && clientDeviceYear >= 1994) {
            alert("Установите облегченную версию приложения для Android по ссылке")
        } else {
            alert("Введен неверный год выпуска");
        }
        break;
    default:
        alert("Введен неверный номер ОС");
        break;
}
