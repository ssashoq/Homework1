function getMultResult(arr) {
    const result = arr.reduce((acc, rec) => acc * rec);
    
    console.log(result);
}

getMultResult([3,4,1,9]);

function getSumResult(arr) {
    const result = arr.reduce((acc, rec) => acc + rec);
    
    console.log(result);
}

getSumResult([3,4,1,9]);

//////////////////////////////////


const users = [
	{name: 'Jon', age: 22},
	{name: 'Richard', age: 18},
	{name: 'Anton', age: 32},
	{name: 'Lida', age: 23},
	{name: 'Bob', age: 44}
];

users.sort((a, b) => a.age > b.age ? 1 : -1);

console.log(users);

///////////////////////////

const arr = [1, '4', 9, 'two'];
arr.sort((a,b)=>b-a);
console.log(arr);

///////////////////////////////

const timer = (deadline) => {
	const interval = setInterval(() => {
		console.log(new Date);
	}, 3000);


	setTimeout(() => {
    clearInterval(interval);
    console.log('30 секунд прошло')
  }, deadline * 3000)
};

timer(11);

/////////////////////////////////


