let i = 0;
while (i < 2) {
    console.log("Привет!");
    i++;
}

////////////////

let a = 0;
while (a <= 5) {
    console.log(a);
    a++;
}

/////////////////

let b = 7;
do {
    console.log(b);
    b++;
} while (b >= 7 && b <= 22);

////////////////////

const obj = {
    'Коля': '200',
    'Вася': '300',
    'Петя': '400'
};

for (let salary in obj) {
    console.log(`${obj} - зарплата ${obj[salary]}`);
}

///////////////////////

let n = 1000;
let num = 0;

while (n > 50) {
    num++;
    n /= 2;
};

console.log(n, num);

////////////////

for (let numFriday = 1; numFriday <= 31; numFriday++) {
    if (numFriday % 7 - 2 == 0) {
        console.log(`Сегодня пятница, ${numFriday}. Необходимо подготовить отчет.`);
        continue;
    }
}

