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

// Contoh penggunaan
const observable = new Observable();

// Fungsi observer 1
const observer1 = (data) => {
   console.log(`Observer 1: ${data}`);
};

// Fungsi observer 2
const observer2 = (data) => {
   console.log(`Observer 2: ${data}`);
};

// Mendaftarkan observer
observable.subscribe(observer1);
observable.subscribe(observer2);

// Notifikasi pertama
console.log('=== Notify 1 ===');
observable.notify('Hello Observers!');

// Menghapus observer1
observable.unsubscribe(observer1);

// Notifikasi kedua setelah observer1 dihapus
console.log('=== Notify 2 ===');
observable.notify('Observer 2 masih mendengarkan.');
