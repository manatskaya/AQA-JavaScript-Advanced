// task 1 - compare driving license age and allowance of obtain them
let driversAge = 20;
let driversLicenseAge = driversAge >= 18;
let isDrivingAllowed = true;

console.log(driversLicenseAge && isDrivingAllowed);

// task 2 - create variables and then make a concatenation with "+" operator
let userName1 = "Maria";

let userName2 = "Anna";

let greeting = "Hello";

let greetGirls = greeting + " " + userName1 + " " + userName2;

console.log(greetGirls);

// task 2 - create variables and then make a concatenation with concat method
let girlName = "Julia";

let boyName = "Andreas";


let greetingInSpanish = "Ola";
console.log(greetingInSpanish);

let greetMuchachos = greetingInSpanish.concat(" ", girlName, " ", boyName);
console.log(greetMuchachos);

// task 3 - variable with value 5.489
let p = "5.489";
console.log(p, typeof p);

let c = "5.489" - 1;
console.log(c, typeof c);


// this is part to practice lesson 4
// Arithmetic operators: "+", "-", "/", "*"

// Plus operations
let bookPage = 50;
bookPage = bookPage + 3;
console.log(bookPage);

//Minus operations
let bookPage1 = 50;
bookPage1 = bookPage1 - 5;
console.log('minus', bookPage1);

// "*"" operations
let bookPage2 = 50;
bookPage2 = bookPage2 * 10;
console.log('*result', bookPage2);

// "/" operations
let division = 50;
division = division/2;
console.log(division);

// percentage % - will show left amount after division
let multiplication = 18 % 5;
console.log('multiplication', multiplication); //will show left amount after division

// decrement - will decrease your amount for 1 (-1)
let decrement = 10;
decrement --
console.log('decrement', decrement);

// increment - will increase your amount +1
let increment = 10;
increment ++
console.log('increment', increment);

// just standard math calculation
console.log('math', 5 * 5 - 10);

// Comparison operators "==" non-strict comparison, "===" strict comparison
let comparisonX = 10;
let comparisonY = "10";

let isEqual = comparisonX != comparisonY;
let isEqualStrict = comparisonX !== comparisonY;
console.log('non-strict comparison', comparisonX == comparisonY);
console.log('compare comparison non-strict way', isEqual);
console.log('compare comparison strict way',isEqualStrict);

let comparisonZ = 10;
let comparisonB = "10";// better use strict comparison
console.log('strict comparison', comparisonZ === comparisonB);

//< >
console.log('big sign', 10 > 5);
console.log('small sign', 10 < 5);
console.log('small or equal', 10 <= 5);
console.log('big or equal', 10 >= 10);


let greeting1 = "Hello World!";

console.log(greeting1.length);
console.log(greeting1[11]);
console.log(greeting1.substring(11));

let userName = "Ivan User";
let userNameDB = "ivan user";
let formatUserNameDB = userNameDB.toUpperCase();
let formatUserName = userName.toUpperCase();
console.log(formatUserName);
console.log(formatUserNameDB);
console.log(userName.toUpperCase() === userNameDB); // when we 
console.log(userName.charAt(1)); // when we need to know what letter is on some place
console.log(userName.indexOf(1)); // will show the letter which is used under index which specified in the brackets
console.log(userName.endsWith("th")); // when we check if the end of the string ends with something
console.log(userName.startsWith("Ivan"));// when we check if the begging of the string start with some letter
console.log(userName.replace("Ivan", "Svitlana")); // when we need to input something in the console, but not change in the code
let greetGirls2 = `${greeting} ${userName1} ${userName2}`;// concatenation of the string
console.log('greeting2', greetGirls2);
