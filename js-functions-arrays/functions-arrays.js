// Task 1.1. Function declaration:
function myFunctionDeclaration (a,b) {
    if (a > b) {
        return a;
    }
    return b;
}
myFunctionDeclaration (5,10);

let resultFunctionDeclaration = myFunctionDeclaration (5,10);
    console.log('result of function declaration',resultFunctionDeclaration);

// Task 1.2. Function expression:
let myFunctionExpression = function(a,b) {
    if (a > b) {
       return a;
    }
    return b;
}
myFunctionExpression (4,0);

let resultFunctionExpression = myFunctionExpression(4,0);
    console.log('result of function expression', resultFunctionExpression);

// 1.3. Arrow function, varian 1:
let myFunctionArrow = (a, b) => {
    if (a > b){ 
        return a;
    }
    return b;
}
let myFunctionArrowResult = myFunctionArrow (8,3);
    console.log('result of arrow function', myFunctionArrowResult);

// 1.3. Arrow function, varian 2:
let myFunctionArrowBoolean = (a, b) => a > b ? a : b;

let myFunctionArrowResultSimple = myFunctionArrowBoolean (12,4);
    console.log('result of arrow function simple way', myFunctionArrowResultSimple);

// Task 2:
function addOneParameter(value) {
    console.log(value);
    let sumOfValueIndex = value + 1;
        if (sumOfValueIndex <= 20) {
            addOneParameter(sumOfValueIndex);
        }
    }
addOneParameter(2);

// Task 3:
// Variant 1 check with "for"
let nestedArray = [["apple", "banana", "dog"],["cherry", "cat", "elephant"],["red", "green", "cat"]];
function checkNestedArrayIndex(nestedArray) {
    for (let index = 0; index < nestedArray.length; index++) {
        const element = nestedArray[index];
        console.log('first array', element);
        for (let a = 0; a < nestedArray.length; a++) {
            console.log(nestedArray[index][a]); 
        }
    }
}
checkNestedArrayIndex(nestedArray);

function checkNestedArrayIncludes(nestedArray) {
    for (let animal of nestedArray) {
    for (let cat of animal) {
        console.log('check cat in array', cat.includes("cat"));
    }
    }
}
checkNestedArrayIncludes(nestedArray);

// Task 4:
// assumption made that the first element shall be divided on the last element in the array

const numbers = [1, 2, 10, 3]; 
function divideArray(numbers) {
    const result = [];
    
    if(numbers.length < 2) {
        throw new Error('length of Array is too short');
    }

    try {
        for (let i = 0; i < numbers.length; i++) {
            let currentValue = numbers[i];
            let res;
            console.log(currentValue);
            if (typeof currentValue !== 'number' || currentValue === 0) {
              throw new Error;
            }
            if(i === 0) {
                res = currentValue / numbers[numbers.length - 1];
            } else {
                res = currentValue / numbers[i - 1]
            }

            result.push(res);
        }
    }
    catch (error) { 
        console.log("error message: this is new error your element in the Array contains not equal to number or zero");
    
    }
    finally {
        console.log("work done");
     }
    return result;
}
const resultOfDivide = divideArray(numbers);
console.log('result to task 4', resultOfDivide);

// Task 5:
// Part a):
const array = [1, 8, 10, 11, -8, 17, 20, 22, 40, 37, 45, 0, 3, 45, 56];

let emptyArray = [];
let i = 0;
while (i < array.length) {
    if (array[i] % 2 > 0) 
    emptyArray.push(array[i]);
    i++;
}
console.log(`numbers in an array are: ${emptyArray}`);

// Part b):
const arrayColors = ["yellow", "green", "apple", "red", "pink"];
const sortedArrayColors = arrayColors.sort((a,b) => a.localeCompare(b));
console.log("sorted Array", sortedArrayColors);

// Task 6:
const animalArray = ["Cat", "Dog", "Turtle"];
const natureLife = ["Zoo", "House", "Forest", "Ocean"];

let animalInNature = animalArray.concat(natureLife);
console.log('concatenated array', animalInNature);

// Task 7:
const arrayNumbers = [10, 20, 30, 40, 50];
const reduceArrayNumbers = arrayNumbers.reduce((digits, elements) => digits + elements);

console.log('sum of all element', reduceArrayNumbers);