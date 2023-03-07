
function min(a, b) {
    if (a < b, a === b) {
        return a;
    } else {
        return b;
    }
}
console.log(min(8, 4));
console.log(min(6, 6));

////////////////////////////////

function num(c) {
    if (c % 2 == 0) {
        console.log("Число четное");
    } else {
        console.log("Число нечетное");
    }
}

console.log(num(5));

//////////////////////////////////

function square(d) {
    console.log(d ** 2);
}
square(8);

function squareTwo(e) {
    return (e ** 2);
};
console.log(squareTwo(5));

/////////////////////////////////////

let age = prompt('Сколько Вам лет?');

if (age < 0) {
    console.log("Вы ввели не верное значение");
} else if (age > 0 && age < 12) {
    console.log("Привет, друг!");
} else if (age >= 13) {
    console.log("Добро пожаловать!");
}

////////////////////////////////////////

function value(a, b) {
    if (isNaN(a, b)) {
        console.log("Одно или оба значения не являются числом")
    } else {
        console.log(a * b);
    }
}

value(4, 5);

/////////////////////////////////////////

let n = prompt('Введите число');

function inputValue(n) {
    if (isNaN(n)) {
        console.log("Переданный параметр не является числом");
    } else {
        console.log(`${n} в кубе равняется ${n ** 3}`);
    }
}

inputValue(n);

///////////////////////////////////////////






