//№1
const people_1 = [
    { name: 'Глеб', age: 29 },
    { name: 'Анна', age: 17 },
    { name: 'Олег', age: 7 },
    { name: 'Оксана', age: 47 }
];
console.log(people_1.sort((a, b) => a.age - b.age));

//№2 
console.log('===========№2===========');

const isPositive = (value) => {
    if (value > 0) return value;
}
const isMale = (value) => {
    if (value.gender === 'male') return value;
}
const filter = (arr, callback) => {
    let result = []; //
    for (let el of arr) {
        if (callback(el) === undefined) continue;
        result.push(callback(el));
    }
    return result;
}

console.log(filter([3, -4, 1, 9], isPositive));

const people_2 = [
    { name: 'Глеб', gender: 'male' },
    { name: 'Анна', gender: 'female' },
    { name: 'Олег', gender: 'male' },
    { name: 'Оксана', gender: 'female' }
];

console.log(filter(people_2, isMale));

//№3 
console.log('===========№3===========');
let intervalDate = setInterval(() => { console.log(new Date()) }, 3000);
setTimeout(() => { clearInterval(intervalDate); console.log('30 секунд прошло'); }, 30000);
//№4 
console.log('===========№4===========');
const delayForSecond_4 = (callback) => {
    setTimeout(callback, 1000);
}
delayForSecond_4(() => console.log('Привет, Глеб из 4 номера!')
)
//№5 
console.log('===========№5===========');
const delayForSecond_5 = (cb) => {
    setTimeout(() => {
        console.log('Прошла одна секунда');
        if (cb) { cb(); }
    }, 1000)
}
const sayHi = (name) => {
    console.log(`Привет, ${name}!`);
}
delayForSecond_5(() => sayHi('Глеб из 5 номера'));