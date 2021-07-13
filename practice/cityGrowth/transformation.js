// double all numbers in the array
var numbers = [1,2,3,4,5];
var doubled = numbers.map(function(num){
    return num * 2;
});
console.log(doubled);

// use map function (& arrow function), add 5 to each number in the array
var numbers = [0,2,4,6,8];
var add5 = numbers.map(num => num + 5);
console.log(add5);

//filter numbers that are > 1 in the array
var numbers = [1,2,3,4,5];
var larger = numbers.filter(function(num){
    return num > 1;
});
console.log(larger);

// filter even numbers in the array
var numbers = [1, 2, 3, 4, 5, 6];
var even = numbers.filter(num => num % 2 == 0);
console.log(even);

// Filter the results to include only animals whose species name starts with the letter "s."
var words = ['seal', 'dog', 'scorpion', 'orangutan', 'salamander'];
var sLetter = words.filter(word => word[0] == "s");
console.log(sLetter);

// sort an array in ascending order
var familyAge = [3,2,39,37,9];
var sortedAge = familyAge.sort((a,b) => a - b);
console.log(sortedAge);

// sort an array in descending order 
// or use (b - a) instead of (a - b)
var familyAge = [3,2,39,37,9];
var sortedAge = familyAge.sort((anElement,anotherElement) => anElement -
anotherElement).reverse();
console.log(sortedAge); 

// slice array
var integers = [0,1,2,3,4,5];
var slice1 = integers.slice(0,2);
console.log(slice1);