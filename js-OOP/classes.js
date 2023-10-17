// Task 3:
class Product {
    constructor(productName, productPrice, productQuantity){
        this.name = productName;
        this.price = productPrice;
        this.quantity = productQuantity;
    }
    getTotalPrice() {
        return this.price * this.quantity;
    }
    purchase(quantity){
        if (this.quantity <= 0 || this.quantity < quantity){
            console.log(`Quantity ${this.quantity} is not enough for purchase`);
        }
         this.quantity = this.quantity - quantity;
         console.log(`product left ${this.quantity}`);
        }

}
const tShirt = new Product ("T-Shirt", 20, 10);
tShirt.getTotalPrice();
tShirt.purchase(5);
console.log('T-shirt price', tShirt.getTotalPrice());

const dress = new Product ("Dress", 10, 10);
dress.getTotalPrice();
dress.purchase(1);
console.log('dress', dress.getTotalPrice());

const jacket = new Product ("Jacket", 8, 5);
jacket.getTotalPrice();
jacket.purchase(1);
console.log('jacket', jacket.getTotalPrice());

console.log('-----------------------------------------')

// Task 4:
class Car{
    #speed
    constructor(carMake, carModel, carYear){
        this.carMake = carMake;
        this.carModel = carModel;
        this.carYear = carYear;
        this.#speed = 0;
    }
    getCarInfo(){
        console.log(`Car info: ${this.carMake}, ${this.carModel}, ${this.carYear}, ${this.#speed}`);
    }
    accelerate(speed){
        this.#speed = this.#speed + speed;
    }
    brake(speed){
        this.#speed = this.#speed - speed;
    }
}
const car = new Car ('Audi', 'Q5', 2023, 20);
car.accelerate(50);
car.brake(10);
car.getCarInfo();

console.log('-----------------------------------------')

class Audi extends Car{
    #audiColor
    constructor(carMake, carModel, carYear, audiColor){
        super(carMake, carModel, carYear);
        this.#audiColor = audiColor;
    }
    getCarInfo(){
        console.log(`Audi info: ${this.carMake}, ${this.carModel}, ${this.carYear}, ${this.#audiColor}`)
    }
    get myCurrentColor(){
        return this.#audiColor;
    }
    set myCurrentColor(newMyCurrentColor){
        this.#audiColor = newMyCurrentColor;
    }
}
const audi = new Audi ("Audi", "Q7", 2020, "white");
audi.getCarInfo();

audi.myCurrentColor = "red";
audi.getCarInfo();

audi.myCurrentColor = "green";
audi.getCarInfo();

console.log('-----------------------------------------')

// Task 5:
class Person {
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
}
class PeopleRegistry extends Person {
    #people
    constructor(firstName, lastName, age){
    super(firstName, lastName, age);
    this.#people = [];
    }
    addPerson(person){
       this.#people.push(person);
    }
    removePerson(firstName, lastName){
        this.#people = this.#people.filter((el) => el.firstName !== firstName && el.lastName !== lastName);
    }
    findPerson(firstName, lastName){
        return this.#people.find((el) => el.firstName === firstName && el.lastName === lastName)
    }
    listPeople(){
     this.#people.forEach(person => {
        console.log(`Name: ${person.firstName}, Surname: ${person.lastName}, Age: ${person.age}`);
     });
    }
}
const peopleRegistry = new PeopleRegistry();

const person1 = new Person("Anna", "Test", 20);
const person2 = new Person("Maria", "Super", 25);
peopleRegistry.addPerson(person1);
peopleRegistry.addPerson(person2);
console.log('-> List People:')
peopleRegistry.listPeople();

console.log('-> Find Person:')
const person = peopleRegistry.findPerson('Maria', 'Super');
console.log(person);

console.log('-> Remove Person:')
peopleRegistry.removePerson('Maria', 'Super');
peopleRegistry.listPeople();


