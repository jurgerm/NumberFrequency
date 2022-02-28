const findFrequency = require('./findFrequency');

const A = [1, 4, 1, 5, 8, 1, 3, 5, 1, 4, 1, 3, 7, 2];

const result = findFrequency(A);

let frequencyString = 'Frequency:';
let numberString = 'Number:   ';

let separator = '';
result.forEach((element, index) => {
  frequencyString += separator + ((index >= 10 && element < 10) ? '  ' : ' ') + element;
  numberString += separator + ' ' + (index+1);
  separator = ',';
});

console.log(frequencyString);
console.log(numberString);




