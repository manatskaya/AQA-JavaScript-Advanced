// Task 1:
let automationQA = {};

automationQA.programmerName = "Ivan";
automationQA.programmingLanguages = "Javascript";
automationQA.age = 30;
automationQA.languages = ["English", "Ukrainian", "Bulgarian"];
automationQA.preferences = {basicPreference: "table"};

console.log(automationQA);

// Task 2:
let room = {
    name : "Living room",
    size : 15,
    window : "true",
}
console.log(room.name, "," , "window - ", room.window);

// Task 3:
let movie = {
    title: "American Pie",
    releaseYear: 2013,
    genre: "Comedy",

}

movie.genre = "Fantastic";
movie.title = "Home Alone";

movie.actors = {mainRole: "Test Test", additionalRole: "One additional"};
movie.director = "Some director";

delete movie.title;
console.log(movie);

// Task 4:
const englishBooks = [
    {
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        year: 1960
    },
    {
        title: "1984",
        author: "George Orwell",
        year: 1949
    },
    {
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        year: 1925
    }
];

for (const book of englishBooks) {

   for (const prop in book) {
    let val = book[prop];
   if (val === "The Great Gatsby") {
        continue;  
    }
   if (val > "1940" && typeof val === "number") {
    console.log("> 1940", val);
   }
    if (val === "George Orwell")
      book[prop] = "New author";
}
}
console.log(englishBooks);

// Task 5:
let languageObject = {
    user_1: {
        languageName: "English",
        languageLevel: "C1",
    },
    user_2: {
        languageName: "Ukrainian",
        languageLevel: "Native"
        },
    user_3: { 
        languageName:"German",
        languageLevel: "A1",
}
}
for (const key in languageObject) {
    //console.log(languageObject[key]);
    for (const element in languageObject[key]) {
        console.log(languageObject[key][element]);
    }
}

// Task 6:
let user = {
    name: "Anna",
    age: 25,
    email: "anna@london.com",
    address: 
    {
    city: "London",
    postalCode: "E1 7DS",
    } 
}


function getUserInfo ({name, age}){
    console.log(`User info: ${name + " " + age}`);
}
 getUserInfo(user);

 function getFullAddress({email, address: {city, postalCode} }) {
    console.log(`Full address is ${email + ", " + city + ", " + postalCode}`);
 }
getFullAddress(user);