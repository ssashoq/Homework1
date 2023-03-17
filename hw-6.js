
const numbs = [1, 5, 4, 10, 0, 3];

for (let i = 0; i < numbs.length; i++) {
	if (numbs[i] == 0) break;
	console.log(numbs[i]);
}

///////////////////////////////////////

const numbers = [1, 5, 4, 10, 0, 3];

console.log(numbers.indexOf(4));

///////////////////////////////////////

let someValue = [1, 3, 5, 10, 20];

someValue = someValue.join(' ');

console.log(someValue);

/////////////////////////////////////////

const arr = [];

for (let i = 0; i < 3; i++) {
	arr.push([]);
	for (let j = 1; j <= 3; j++) {
		arr[i].push("1");
	}
}
console.log(arr);

/////////////////////////////////////////////

let array = [1, 1, 1];

array.push(2, 2, 2);
console.log(array);

////////////////////////////////////////////////

let someArr = [9, 8, 7, 'a', 6, 5];

someArr = someArr.sort();
someArr.pop('a');
console.log(someArr);

/////////////////////////////////////////////////

let mass = [9, 8, 7, 6, 5];

let userValue = prompt('Введите число от 1 до 10');

const result = mass.filter(item => item === userValue);
console.log(result);

///////////////////////////////////////////////////

let message = 'abcdef';

let massive = message.split('');

massive.reverse();

massive = massive.join('');
console.log(massive);

////////////////////////////////////////////////////////

let arrNumbers = [
	[1, 2, 3],
	[4, 5, 6]
];

let asd = arrNumbers.reduce(function (a, b) {
	return a.concat(b);
});
console.log(asd);

////////////////////////////////////////////////////


let arrSum = [3, 4, 5, 9, 1];
let summa = 0;

for (let i = 0; i < arrSum.length; i++) {
	summa += arrSum[i];
	console.log(summa);
}
