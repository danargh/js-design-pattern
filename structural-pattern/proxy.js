// * Proxy
// proxy merupakan konsep dimana setting objek dilakukan secara tidak langsung melalui objek proxy (wakil)

// const person = {
//    name: "John Doe",
//    age: 42,
//    nationality: "American",
// };

// const personProxy = new Proxy(person, {
//    get: (obj, prop) => {
//       console.log(`The value of ${prop} is ${obj[prop]}`);
//    },
//    set: (obj, prop, value) => {
//       console.log(`Changed ${prop} from ${obj[prop]} to ${value}`);
//       obj[prop] = value;
//       return true;
//    },
// });

// personProxy.name;
// personProxy.age = 43;
// console.log(person);

// * proxy implementation : validation

// const person = {
//    name: "John Doe",
//    age: 42,
//    nationality: "American",
// };

// const personProxy = new Proxy(person, {
//    get: (obj, prop) => {
//       if (!obj[prop]) {
//          console.log(`Hmm.. this property doesn't seem to exist`);
//       } else {
//          console.log(`The value of ${prop} is ${obj[prop]}`);
//       }
//    },
//    set: (obj, prop, value) => {
//       if (prop === "age" && typeof value !== "number") {
//          console.log(`Sorry, you can only pass numeric values for age.`);
//       } else if (prop === "name" && value.length < 2) {
//          console.log(`You need to provide a valid name.`);
//       } else {
//          console.log(`Changed ${prop} from ${obj[prop]} to ${value}.`);
//          obj[prop] = value;
//       }
//       return true;
//    },
// });

// personProxy.nonExistentProperty;
// personProxy.age = 21;
// personProxy.name = "Danar Ghulamsyah";

//  * proxy implementatino : Reflect
// lebih best practice dalam implementasi proxy
const person = {
   name: "John Doe",
   age: 42,
   nationality: "American",
};

const personProxy = new Proxy(person, {
   get: (obj, prop) => {
      console.log(`The value of ${prop} is ${Reflect.get(obj, prop)}`);
   },
   set: (obj, prop, value) => {
      console.log(`Changed ${prop} from ${obj[prop]} to ${value}`);
      return Reflect.set(obj, prop, value);
   },
});

personProxy.name;
personProxy.age = 43;
personProxy.name = "Jane Doe";
