// * Singleton-pattern
// Merupakan class yang di instance satu kali dan dapat diakses secara global
// However, Singletons are actually considered an anti-pattern, and can (or.. should) be avoided in JavaScript.

// * Penjelasan mudah : class singleton hanya memiliki instance object satu saja tidak boleh lebih

class Config {
   constructor() {
      if (Config.instance) {
         return Config.instance; // Mengembalikan instance yang sudah ada
      }
      Config.instance = this; // Menyimpan instance pertama yang dibuat
   }

   start() {
      console.log('App has started');
   }

   update() {
      console.log('App has updated');
   }
}

// Membuat instance pertama
const config1 = new Config();
config1.start();

// Mencoba membuat instance kedua
const config2 = new Config();
config2.update();

// Verifikasi bahwa kedua instance adalah objek yang sama
console.log(config1 === config2); // Output: true
