// * Observer untuk react
/** With the observer pattern, we can subscribe certain objects, the observers, to another object, called the observable. */

class Observable {
   constructor() {
      this.observers = [];
   }
   subscribe(func) {
      this.observers.push(func);
   }
   unsubscribe(func) {
      this.observers = this.observers.filter((observer) => observer !== func);
   }
   notify(data) {
      this.observers.forEach((observer) => observer(data));
   }
}
