let str = 'js';
console.log(str.toUpperCase());

/////////////////

const products = ['Рыба', 'Курица', 'Виноград', 'Курага', 'Кукуруза'];
const search = 'ку';
const myArr = [];

products.forEach((products) => {
    if (products.toLowerCase().startsWith(search.toLowerCase())) {
        myArr.push(products)
    }
});

/////////////////

let a = 32.58884;

// 1 
console.log(Math.floor(a));

// 2
console.log(Math.ceil(a));

// 3
console.log(Math.round(a));

//////////////////

let arrMax = [52, 53, 49, 77, 21, 32];

let max = Math.max(...arrMax);

console.log(max);

let min = Math.min(...arrMax);

console.log(min);

//////////////////////

function getRandom(max) {
    return Math.floor(Math.random() * max);
}

console.log(getRandom(11));

///////////////////////////

function getRandomArrNumber(randValue) {
    return Math.round(Math.random() * randValue);
}

console.log(getRandomArrNumber(7));

/////////////////////////////

function getRandomInt(minValue, maxValue) {
    return Math.round(Math.random() * (maxValue - minValue) + minValue);
}

console.log(getRandomInt(5, 10));

//////////////////////////////

let currentDate = Date();
console.log(currentDate);

//////////////////////////////

let myDate = new Date();
console.log(myDate);

myDate.setDate(myDate.getDate() + 73);
console.log(myDate);

/////////////////////////////

const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];

const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
    "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];


let someDate = new Date();
let fullDate = someDate.getDate() + " " + months[someDate.getMonth()] + " " + someDate.getFullYear() + " это - " + days[someDate.getDay()];
let fullTime = someDate.getHours() + ":" + someDate.getMinutes() + ":" + someDate.getSeconds();

console.log(fullDate);
console.log(fullTime);

