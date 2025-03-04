/**
 * Abstract Factory Method
 * * pola desain yang digunakan untuk membuat keluarga objek terkait atau bergantung tanpa menentukan kelas konkret mereka secara langsung.
 */

class Bus {
   constructor() {
      this.name = 'Bus';
      this.wheels = 6;
   }
   turnOn = () => console.log('Vrooooom Vrooooom!!');
}

class Car {
   constructor() {
      this.name = 'Car';
      this.wheels = '4';
   }
   turnOn = () => console.log('Mbeemmm Mbeemmm');
}

// Tambahkan pada factory
const vehicleFactory = {
   createVehicle: function (type) {
      switch (type) {
         case 'car':
            return new Car();
         case 'truck':
            return new Truck();
         case 'motorcycle':
            return new Motorcycle();
         case 'bus':
            return new Bus(); // Tambahan
         default:
            return null;
      }
   },
};

// Penggunaan
const bus = vehicleFactory.createVehicle('bus');
console.log(bus); // Bus { name: 'Bus', wheels: 6, turnOn: [Function: turnOn] }
bus.turnOn(); // Output: "Vrooooom Vrooooom!!"
