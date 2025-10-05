class EventDispatcher {
   constructor() {
      this.events = {};
   }

   on(event, listener) {
      if (!this.events[event]) {
         this.events[event] = [];
      }
      this.events[event].push(listener);
   }

   emit(event, data) {
      if (this.events[event]) {
         this.events[event].forEach(listener => listener(data));
      }
   }
}

// Contoh penggunaan
const dispatcher = new EventDispatcher();

// Mendaftarkan listener
dispatcher.on("userLoggedIn", (user) => {
   console.log(`User ${user.name} telah masuk.`);
});

// Memicu event
dispatcher.emit("userLoggedIn", { name: "Danar" });
