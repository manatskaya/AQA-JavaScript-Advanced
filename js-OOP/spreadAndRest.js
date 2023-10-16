// Task 1 - 
const testingLevels = ['Unit', 'Integration', 'System', 'Acceptance'];
const testingPrincipals = ['Testing shows defects presence', 'Exhaustive testing is impossible', 'Early testing', 'Defects clustering', 'Pesticide paradox', 'Testing is context dependent', 'Absence of errors fallacy'];
const testingTheory = [...testingLevels, ...testingPrincipals];
console.log(testingTheory);

// Task 2:
function multiply(multiplier, ...arguments) {
    return arguments.map((arg) => arg * multiplier);
}
const parsedArguments = multiply(4, 1, 1, 2, 6, 10, 45, 67);
console.log(parsedArguments);
