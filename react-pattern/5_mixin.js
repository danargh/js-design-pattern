// * Mixin pattern
/** A mixin is an object that we can use in order to add reusable functionality to
 * another object or class, without using inheritance. */
class Dog {
   constructor(name) {
      this.name = name;
   }
}

const dogFunctionality = {
   bark: () => console.log("woof!"),
   wagTail: () => console.log("Wagging my tail!"),
   play: () => console.log("Playing"),
};

Object.assign(Dog.prototype, dogFunctionality);

const pet1 = new Dog("Daisy");
console.log(pet1.name);
pet1.bark();
pet1.play();
