/**
 * Decorator
 * * pola desain yang digunakan untuk menambahkan fungsionalitas atau perilaku baru ke suatu objek secara dinamis tanpa mengubah implementasi kelas aslinya
 */

// Kelas dasar
class Coffee {
   cost() {
      return 5; // Harga dasar kopi
   }
   description() {
      return 'Basic Coffee'; // Deskripsi dasar kopi
   }
}

// Decorator 1: Menambahkan susu
function withMilk(coffee) {
   // Simpan referensi ke metode asli
   const originalCost = coffee.cost;
   const originalDescription = coffee.description;

   coffee.cost = () => originalCost.call(coffee) + 2;
   coffee.description = () => `${originalDescription.call(coffee)}, Milk`;
}

// Decorator 2: Menambahkan gula
function withSugar(coffee) {
   // Simpan referensi ke metode asli
   const originalCost = coffee.cost;
   const originalDescription = coffee.description;

   coffee.cost = () => originalCost.call(coffee) + 1;
   coffee.description = () => `${originalDescription.call(coffee)}, Sugar`;
}

const myCoffee = new Coffee();

console.log(myCoffee.cost()); // Output: 5
console.log(myCoffee.description()); // Output: "Basic Coffee"

// Tambahkan susu
withMilk(myCoffee);

console.log(myCoffee.cost()); // Output: 7
console.log(myCoffee.description()); // Output: "Basic Coffee, Milk"

// Tambahkan gula
withSugar(myCoffee);

console.log(myCoffee.cost()); // Output: 8
console.log(myCoffee.description()); // Output: "Basic Coffee, Milk, Sugar"
