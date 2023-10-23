// Map collection object()
// 1. Adding data to map.
// Variant 1:
let map = new Map([
  ["test", "value"],
  ["test2", "value2"],
]);
console.log(map);

// Variant 2 via set method:
let map1 = new Map();
map1.set("some key", "value5");
map1.set(1, "value3");
map1.set(false, "value4");
console.log(map1);

// 2. Method get - will check if there is such key in the collection of objects:
console.log(map1.get("1")); // will return undefined b/c type of there is no type of string 1 in the collection
console.log(map1.get(1)); // will return true value since this value is available
// 3. Method has - will check if some key specified is available:
console.log(map1.has("some key")); // will return true, since it is present
console.log(map1.has("1")); // will return false
console.log(map1.delete(false)); // will return true
console.log(map1);
// console.log(map);
console.log(map.clear()); // will remove all elements in collection
console.log(map);
console.log(map1.size); // will show the size of the collection
//map1.forEach((key, value, map1) => {
//console.log("kay:", key, "value", value, "map", map1);
//});

// Using for of loop in map
for (const value of map1.values()) {
  // will go through the values
  console.log(value);
}
for (const key of map1.keys()) {
  // will go through the keys and input this data
  console.log(key);
}
for (const entity of map1.entries()) {
  // will go through the keys and values and will input it
  console.log(entity);
}
// Set Object
// Adding some new value to Set:
let set = new Set();
set.add("user", "username");
set.add("user2", "username2");
set.add("user3", "username3");
console.log(set);
console.log(set.has("user"));
let set1 = new Set(["apple", "apple", "banana"]);
const myMap = new Map([...set].map((value) => [value, value]));
console.log(myMap);

// Regex
let price = "$1300";

const replacePrice = price.replace(/\$/g, "");
console.log(replacePrice);

let price1 = "$130,300,300.23";
const replacePrice1 = price1.replace(/[,]/g, ""); // will change the data in all cases if find this value
console.log(replacePrice1);

let test = "       Test '@' test";
let testWithReplace = test.replace(/^\s*[ ]/gm, "").replace(/'@'/, "1234");
console.log(testWithReplace);

let stringT = "I love eat";
let checkMatch = stringT.match(/love/);
console.log(checkMatch[0]); // need to specify index
