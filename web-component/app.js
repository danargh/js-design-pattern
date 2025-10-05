// Create a class for the element
// class MyCustomElement extends HTMLElement {
//    static observedAttributes = ["color", "size"];

//    constructor() {
//       // Always call super first in constructor
//       super();
//    }

//    connectedCallback() {
//       console.log("Custom element added to page.");
//    }

//    disconnectedCallback() {
//       console.log("Custom element removed from page.");
//    }

//    adoptedCallback() {
//       console.log("Custom element moved to new page.");
//    }

//    attributeChangedCallback(name, oldValue, newValue) {
//       console.log(`Attribute ${name} has changed.`);
//    }
// }

class MyCustomElement extends HTMLElement {
   constructor() {
      super();
      this._internals = this.attachInternals();
   }

   get collapsed() {
      return this._internals.states.has("hidden");
   }

   set collapsed(flag) {
      if (flag) {
         // Existence of identifier corresponds to "true"
         this._internals.states.add("hidden");
      } else {
         // Absence of identifier corresponds to "false"
         this._internals.states.delete("hidden");
      }
   }
}

customElements.define("my-custom-element", MyCustomElement);

