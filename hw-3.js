let password = 'пароль';
let user = prompt('Введите пароль');
alert(user === password ? 'Пароль введен верно' : 'Пароль введен неправильно');

let c = 2;c>0 && c<10 ? alert('Верно') : alert('Неверно');

let d = 5;
let e = 10;
d>100 || e>100 ? alert('Верно') : alert('Неверно');

let a = 2;
let b = 3;
alert(a+b);

let monthNumber = Number(prompt('Введите номер месяца'));
switch(monthNumber) {
    case 1:
    case 2:
        console.log('Зима');
        break;
    case 3:   
    case 4:
    case 5:
        console.log('Весна');
        break;
    case 6:
    case 7:
    case 8:
        console.log('Лето');
        break;
    case 9:  
    case 10:
    case 11:
        console.log('Осень');
        break;
    case 12:
        сonsole.log('Зима');
        break;
    default:
        console.log('Такого месяца не существует!');
        break;
}


