/**
 * Prototype
 * * Prototype design pattern adalah sebuah pola desain yang memungkinkan Anda membuat objek baru berdasarkan "prototype" (prototipe) dari objek yang ada.
 */

// * cara baru :
class Dog {
   constructor(name) {
      this.name = name;
   }

   bark() {
      // console.log("bark called!");
      return `Woof!`;
   }
}

const dog1 = new Dog('Daisy');
const dog2 = new Dog('Max');
const dog3 = new Dog('Spot');

Dog.prototype.play = () => console.log('Playing now!');

console.log(dog1.__proto__.bark());
dog1.play();

// * cara lain

// We declare our prototype object with two methods
const enemy = {
   attack: () => console.log('Pim Pam Pum!'),
   flyAway: () => console.log('Flyyyy like an eagle!'),
};

// We declare another object that will inherit from our prototype
const bug1 = {
   name: 'Buggy McFly',
   phrase: "Your debugger doesn't work with me!",
};

// With setPrototypeOf we set the prototype of our object
Object.setPrototypeOf(bug1, enemy);

// With getPrototypeOf we read the prototype and confirm the previous has worked
console.log(Object.getPrototypeOf(bug1)); // { attack: [Function: attack], flyAway: [Function: flyAway] }

console.log(bug1.phrase); // Your debugger doesn't work with me!
console.log(bug1.attack()); // Pim Pam Pum!
console.log(bug1.flyAway()); // Flyyyy like an eagle!

// * cara lain

// Base object (prototype)
const vehiclePrototype = {
   startEngine() {
      console.log(`${this.type} engine started!`);
   },
   stopEngine() {
      console.log(`${this.type} engine stopped!`);
   },
   describe() {
      console.log(`This is a ${this.type} with ${this.wheels} wheels.`);
   },
};

// Creating a new object using the prototype
const car = Object.create(vehiclePrototype);
car.type = 'Car';
car.wheels = 4;

const motorcycle = Object.create(vehiclePrototype);
motorcycle.type = 'Motorcycle';
motorcycle.wheels = 2;

// Using the prototype methods
car.startEngine(); // Output: "Car engine started!"
car.describe(); // Output: "This is a Car with 4 wheels."

motorcycle.startEngine(); // Output: "Motorcycle engine started!"
motorcycle.describe(); // Output: "This is a Motorcycle with 2 wheels."
