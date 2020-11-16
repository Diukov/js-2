const arrayString = prompt('введите числа через запятую');
const array = arrayString.split(',').map(Number);
const reducer = (accumulator, currentValue) => accumulator + currentValue;

console.log(array.reduce(reducer) / array.length);