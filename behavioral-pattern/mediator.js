// * Mediator
/** The mediator pattern makes it possible for components to interact with each other through a central point: the mediator. */

// studi kasus chat room
class ChatRoom {
   logMessage(user, message) {
      const sender = user.getName();
      console.log(`${new Date().toLocaleDateString()} [${sender}] [${message}]`);
   }
}

class User {
   constructor(name, chatroom) {
      this.name = name;
      this.chatroom = chatroom;
   }
   getName() {
      return this.name;
   }
   send(message) {
      return chatroom.logMessage(this, message);
   }
}

const chatroom = new ChatRoom();
let user1 = new User('danar', chatroom);
user1.send('aku cinta kamu');

// case study lain contohnya di express js di node js
