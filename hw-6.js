//№1 
console.log('===========№1===========');
const arr_1 = [1, 5, 4, 10, 0, 3];
for (let el of arr_1) {
    console.log(el);
    if (el === 10) break;
}
//№2
console.log('===========№2===========');
console.log(arr_1.indexOf(4));
//№3
console.log('===========№3===========');
const arr_3 = [1, 3, 5, 10, 20];
console.log(arr_3.join(' '));
//№4
console.log('===========№4===========');
const arr_4 = [];
for (let i = 0; i < 3; i++) {
    const arr_4_1 = [];
    for (let j = 0; j < 3; j++) {
        arr_4_1.push(1);
    }
    arr_4.push(arr_4_1);
}
console.log(arr_4);
//№5
console.log('===========№5===========');
const arr_5 = [1, 1, 1];
const arr_5_1 = [2, 2, 2];
arr_5.push(...arr_5_1);
console.log(arr_5);
//№6
console.log('===========№6===========');
const arr_6 = [9, 8, 7, 'a', 6, 5];
const result_arr_6 = arr_6.filter(el => typeof el === 'number');
console.log(result_arr_6.sort());
//№7
console.log('===========№7===========');
let answer = prompt("Угадайте число из массива!", "введите число");
while (!(answer.length === 1 && answer[0] === '0') && !Number(answer)) {
    answer = prompt("Введите число!");
}
const arr_7 = [9, 8, 7, 6, 5];
arr_7.includes(answer) ? alert("Угадал!") : alert("Не угадал!");
//№8
console.log('===========№8===========');
let str_8 = 'abcdef';
console.log(str_8.split('').reverse().join(''));
//№9
console.log('===========№9===========');
const arr_9 =
    [
        [1, 2, 3],
        [4, 5, 6]
    ];
console.log(arr_9.flat(1));
//console.log(arr_9.reduce((acc, el) => [...acc, ...el], [])); //На память
//№10
console.log('===========№10===========');
const arr_10 = [];
for (let i = 0; i < 20; i++)
    arr_10.push(Math.floor(1 + Math.random() * 10));
console.log(...arr_10);
for (let i = 0; i < arr_10.length - 1; i++)
    console.log(arr_10[i] + arr_10[i + 1]);
//№11
console.log('===========№11===========');
const arr_11 = [1, 2, 3, 4];
const square_arr = (arr) => arr.map(el => el ** 2);
console.log(square_arr(arr_11));
//№12
console.log('===========№12===========');
const words = ['слово', '', 'слог', 'длинное предложение', 'буква'];
const getLengthWords = (words) => words.map(wordsLength => wordsLength.length);
console.log(getLengthWords(words));
//№13
console.log('===========№13===========');
const arr_13 = [-1, 4, 0, 8, -10];
const filterPositive = (arr) => arr.filter(el => el < 0);
console.log(filterPositive(arr_13));
//№14
console.log('===========№14===========');
const arr_14 = [];
for (let i = 0; i < 10; i++)
    arr_14.push(Math.floor(Math.random() * 10));
const arr_14_1 = arr_14.filter(el => el % 2 === 0);
console.log(...arr_14);
console.log(...arr_14_1);
//№15
console.log('===========№15===========');
const arr_15 = [];
for (let i = 0; i < 6; i++)
    arr_15.push(Math.floor(1 + Math.random() * 10));
console.log(...arr_15);
console.log(arr_15.reduce((sum, valueEl) => sum + valueEl) / arr_15.length);
