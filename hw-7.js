//№1 
console.log('===========№1===========');
let string_1 = 'строка';
console.log(string_1.toLocaleUpperCase());

//№2 
console.log('===========№2===========');
const searchStart_2 = (arrWords, search) => {
    return arrWords.filter(word => word.toLowerCase().includes(search.toLowerCase()));
}
console.log(searchStart_2(['Кошка', 'Кит', 'Комар', 'Носорог'], 'ко')); // ['кошка', 'комар']
console.log(searchStart_2(['яблоко', 'груша', 'гриб', 'огурец'], 'гру'));// ['груша']
console.log(searchStart_2(['Дом', 'Банк', 'Больница', 'Театр'], 'Кино'));  // []
//№3
console.log('===========№3===========');
let number_3 = 32.58884;
console.log(Math.floor(number_3));
console.log(Math.round(number_3));
console.log(Math.ceil(number_3));
//№4
console.log('===========№4===========');
const numbers_4 = [52, 53, 49, 77, 21, 32];
console.log(Math.min(...numbers_4));
console.log(Math.max(...numbers_4));
//№5
console.log('===========№5===========');
const randomNumber_5 = () => console.log(Math.floor(Math.random() * 10));
//№6
console.log('===========№6===========');
const getRandomArrNumbers = (randomNumber) => {
    const result = [];
    for (let i = 0; i < Math.floor(randomNumber / 2); i++) {
        result[i] = (Math.round(Math.random() * randomNumber));
    }
    return result;
}

let i = 0;
while (i < 5) {
    console.log(getRandomArrNumbers(Math.round(Math.random() * 20)));
    i++;
}
//№7
console.log('===========№7===========');
const randomNumber_7 = (value_1, value_2) =>
    Math.round(
        Math.min(value_1, value_2) +
        Math.random() *
        (Math.max(value_1, value_2) -
            Math.min(value_1, value_2))
    );
console.log(randomNumber_7(32, 103));
//№8
console.log('===========№8===========');
let currentDate_8 = new Date();
console.log(currentDate_8);
currentDate_8 = new Date("2/11/2024");
console.log(currentDate_8);
currentDate_8 = new Date(2024, 1, 11, 22, 36, 54);
console.log(currentDate_8);
//№9 
console.log('===========№9===========');
console.log(new Date());
let currentDate_9 = new Date();
currentDate_9.setDate(currentDate_9.getDate() + 73);
console.log(currentDate_9);
//№10
console.log('===========№10===========');
let currentDate_10 = new Date();
const dateFormat_10 = (data) => {
    const dayOfTheWeek = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
    const month = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
    return `День: ${data.getDate()} ${month[data.getMonth()]} ${data.getFullYear()} - это ${dayOfTheWeek[data.getDay()]}\nВремя: ${data.getHours()}:${data.getMinutes()}:${data.getSeconds()}`;
}
console.log(dateFormat_10(currentDate_10));
//№11
console.log('===========№11===========');
const rememberTheWords = () => {
    const words = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];
    const shuffle = (array) => array.sort(() => Math.random() - 0.5)
    alert(shuffle(words));
    let answer1 = String(prompt("Введите первое слово"));
    let answer2 = String(prompt("Введите второе слово"));
    if (answer1.toLocaleLowerCase().trim() === words[0].toLocaleLowerCase() &&
        answer2.toLocaleLowerCase().trim() === words[words.length - 1].toLocaleLowerCase())
        alert("Поздравляю, Вы угадали оба слова");
    else if (answer1.toLocaleLowerCase().trim() === words[0].toLocaleLowerCase() ||
        answer2.toLocaleLowerCase().trim() === words[words.length - 1].toLocaleLowerCase())
        alert("Вы были близки к победе!");
    else
        alert("Вы ответили неверно!");
}