// task 1:
let yearsOfExperience = 5;

let compensation;
let bonusPercentage;
let personalBonus;
let compensationTotal; 

if (yearsOfExperience <= 0.5) {
    compensation = 0;
    bonusPercentage = 0;
    personalBonus = bonusPercentage / 100 * compensation;
    compensationTotal = compensation + personalBonus;

        console.log('you work in the company too little', compensationTotal);
} 
else if (yearsOfExperience > 0.5 && yearsOfExperience <= 1) {
    compensation = 100;
    bonusPercentage = 1;
    personalBonus = bonusPercentage / 100 * compensation;
    compensationTotal = compensation + personalBonus;

        console.log('compensation for work from 0.5 to 1 year', compensationTotal);
} 
else if (yearsOfExperience > 1 && yearsOfExperience <= 2) {
    compensation = 333;
    bonusPercentage = 3;
    personalBonus = bonusPercentage / 100 * compensation;
    compensationTotal = compensation + personalBonus;

        console.log('compensation for work from 1 to 2 years', compensationTotal);
} 
else if (yearsOfExperience > 2 && yearsOfExperience <= 4) {
    compensation = 555;
    bonusPercentage = 4;
    personalBonus = bonusPercentage / 100 * compensation;
    compensationTotal = compensation + personalBonus;

        console.log('compensation for work from 2 to 4 years', compensationTotal);
}
else if (yearsOfExperience > 4) {
    compensation = 666;
    personalBonus = yearsOfExperience * compensation;
    compensationTotal = compensation + personalBonus;

        console.log('you are well respected', compensationTotal);
} 
else {
        console.log('something went wrong');
}

// task 2
let numberMonthOfYear = 10;

switch (numberMonthOfYear){
    case 01:
        console.log('January');
        break;
    case 02:
        console.log('February');
        break;
    case 03:
        console.log('March');
        break;
    case 04:
        console.log('April');
        break;
    case 05:
        console.log('May');
        break;
    case 06:
        console.log('June');
        break;
    case 07:
        console.log('July');
        break;
    case 08:
        console.log('August');
        break;
    case 09:
        console.log('September');
        break;
    case 10:
        console.log('October');
        break;
    case 11:
        console.log('November');
        break;
    case 12:
        console.log('December');
        break;
    default:
            console.log('new year started')
   
}

// task 3:
for (let number = 0; number <= 30; number++){
    if (number === 0 || number === 22){
        continue;
    }
    if (number % 2 === 0){
        console.log( number);
    }
}

// task 4:
let numberA = 12;
let numberB = 10;

let comparisonAB =
    numberA > numberB 
        ? console.log('A greater B') 
        : console.log('B greater A');

// task 5:
let newString = 'Javascript is fun';
let index = 0;

while (index < newString.length) {
    let currentLetter = newString.charAt(index);
    index++;
    console.log('->', currentLetter);
    
    if (currentLetter === 'a') {
        continue;
    }

    if (currentLetter === 'n') {
        break;
    }
} 