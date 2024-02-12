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