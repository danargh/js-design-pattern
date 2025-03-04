/**
 * Builder
 * * pola desain yang digunakan untuk membuat objek kompleks dengan cara yang fleksibel dan bertahap.
 */

// Base class for Bug
class Bug {
   constructor(name, phrase) {
      this.name = name;
      this.phrase = phrase;
   }
}

// Builder class to add abilities to Bug
class BugBuilder {
   constructor(bug) {
      this.bug = bug; // Existing bug object
   }

   addFlyingAbility() {
      this.bug.fly = () => console.log(`Now ${this.bug.name} can fly!`);
      return this; // Enable method chaining
   }

   addSpeechAbility() {
      this.bug.saySmthg = () => console.log(`${this.bug.name} walks the walk and talks the talk!`);
      return this; // Enable method chaining
   }

   build() {
      return this.bug; // Return the modified bug object
   }
}

// Example usage
const bug1 = new Bug('Buggy McFly', "Your debugger doesn't work with me!");
const bug2 = new Bug('Martiniano Buggland', "Can't touch this! Na na na na...");

// Adding abilities using BugBuilder
const enhancedBug1 = new BugBuilder(bug1).addFlyingAbility().build();
enhancedBug1.fly(); // Output: "Now Buggy McFly can fly!"

const enhancedBug2 = new BugBuilder(bug2).addSpeechAbility().build();
enhancedBug2.saySmthg(); // Output: "Martiniano Buggland walks the walk and talks the talk!"
