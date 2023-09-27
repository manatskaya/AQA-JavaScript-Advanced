// task 1 - compare driving license age and allowance of obtain them
let driversAge = 20;

let driversLicenseAge = driversAge >= 18;

let isDrivingAllowed = true;

console.log('is drivingAllowed - ', driversLicenseAge && isDrivingAllowed);


// task 2 - create variables and then make a concatenation with "+" operator
let userName1 = "Maria";

let userName2 = "Anna";

let greeting = "Hello";

let greetGirls = greeting + " " + userName1 + " " + userName2;

console.log('greeting using plus operand - ', greetGirls);

// task 2 - create variables and then make a concatenation with concat method
let girlName = "Julia";

let boyName = "Andreas";

let greetingInSpanish = "Ola";

let greetMuchachos = greetingInSpanish.concat(" ", girlName, " ", boyName);

console.log('greeting in spanish via concat method - ', greetMuchachos);


// task 3 - variable with value 5.489
let g = "5.489";

// variant 1 - implicit coercion of variable "c"
let implicitCoercion = g - 0;

console.log('result of implicit coercion - ', implicitCoercion, typeof implicitCoercion);

// variant 2 - explicit coercion of variable "d"
let explicitCoercion = parseFloat(g);

console.log('result of explicit coercion - ',explicitCoercion, typeof explicitCoercion);

let n = Number.isNaN(explicitCoercion);// 5.489 is not equal to NaN with isNan method - variant 1

console.log('comparison to NaN using is NaN method - ', n);

// 5.489 is not equal to NaN - variant 2:
let m = 5.489 - undefined;

console.log('comparison to NaN via undefined -', explicitCoercion === m);

// 5.489 is not equal to NaN - variant 3:
console.log('comparison to NaN using not equal operator - ', explicitCoercion != NaN);

console.log('rounding of 5.489 - ', explicitCoercion.toFixed(1));

let convertedToString = explicitCoercion.toString();

console.log('convertedToString - ', convertedToString, typeof convertedToString);


// task 4:
let resource = "Wikipedia is a free online encyclopedia, created and edited by volunteers around the world and hosted by the Wikipedia Foundation"

console.log('length of wikipedia sentence - ', resource.length);
console.log('check end of the sentence - ', resource.endsWith('Foundation'));
console.log('check if sentence contains world - ', resource.includes('world'));
console.log(resource.replaceAll('Wikipedia', 'Resource'));


// task 5:
let numberPI = Math.PI;

let radiusOfCircle = 5;

let lengthOfRectangle = Math.PI;

let widthOfRectangle = 7;

let heightOfCylinder = 12;

let areaOfCircle = numberPI * (radiusOfCircle ** 2);
console.log('calc area of circle - ', areaOfCircle);
console.log('rounding area of circle', areaOfCircle.toFixed(2));

let areaOfRectangle = lengthOfRectangle * widthOfRectangle;
console.log('calc area of rectangle - ', areaOfRectangle);
console.log('rounding area of rectangle', areaOfRectangle.toFixed(2));

let volumeOfCylinder = numberPI * (radiusOfCircle ** 2) * heightOfCylinder;
console.log('calc volume of cylinder - ', volumeOfCylinder);
console.log('rounding volume of cylinder', volumeOfCylinder.toFixed(2));