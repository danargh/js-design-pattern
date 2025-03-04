/**
 * Factory Method
 * * pola desain yang digunakan untuk membuat objek tanpa menentukan kelas spesifiknya secara langsung.
 */

class Alien {
   constructor(name, phrase, species = 'alien') {
      this.name = name;
      this.phrase = phrase;
      this.species = species;
   }

   fly = () => console.log('Zzzzzziiiiiinnnnnggggg!!');
   sayPhrase = () => console.log(this.phrase);
}

// Factory Method
class AlienFactory {
   static createAlien(type, name, phrase) {
      switch (type) {
         case 'friendly':
            return new Alien(name, phrase, 'friendly alien');
         case 'hostile':
            return new Alien(name, phrase, 'hostile alien');
         default:
            return new Alien(name, phrase, 'alien');
      }
   }
}

// Membuat alien menggunakan Factory Method
const friendlyAlien = AlienFactory.createAlien('friendly', 'Zorg', 'Hello, Earthling!');
const hostileAlien = AlienFactory.createAlien('hostile', 'Krang', 'Bow before me, puny humans!');
const defaultAlien = AlienFactory.createAlien('default', 'Ali', "I'm just an alien.");

console.log(friendlyAlien); // Alien { name: 'Zorg', phrase: 'Hello, Earthling!', species: 'friendly alien' }
console.log(hostileAlien); // Alien { name: 'Krang', phrase: 'Bow before me, puny humans!', species: 'hostile alien' }
console.log(defaultAlien); // Alien { name: 'Ali', phrase: "I'm just an alien.", species: 'alien' }

friendlyAlien.sayPhrase(); // Output: "Hello, Earthling!"
hostileAlien.fly(); // Output: "Zzzzzziiiiiinnnnnggggg!!"

/**
 * Penjelasan Detail Implementasi Factory Method
Abstraksi Proses Pembuatan:
Proses pembuatan objek Alien dialihkan ke AlienFactory dengan metode createAlien. Ini adalah Factory Method yang bertanggung jawab untuk menentukan jenis alien berdasarkan parameter type.

Fleksibilitas:
Dengan pendekatan ini, Anda dapat menambahkan jenis alien baru hanya dengan memperluas logika di dalam AlienFactory, tanpa mengubah kelas Alien atau kode yang menggunakan factory.

Centralized Creation Logic:
Semua logika untuk membuat objek Alien kini terkonsentrasi dalam satu tempat (AlienFactory), sehingga lebih mudah dipelihara dan diperluas.
 */
