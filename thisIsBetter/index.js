//Using an ES5 function to try and access the "this" of an object, but ES5 does not have lexical scoping of "this"
const person1 = {
  name: 'Ari',
  favColor: 'purple',
  greet: function() {
    setTimeout(function() {//using an ES5 function
      console.log(this.name); // 'this' refers to the global object, not person
    }, 500);
  }
};



// Using an ES6 arrow function to access the lexical scope of "this"
const person2 = {
  name: 'Jane',
  favColor: 'green',
  greet: function() {
    setTimeout(() => {//using an ES6 arrow function
      console.log(this.name); // 'this' refers to the person2 object
    }, 500);
  }
};


window.document.addEventListener("DOMContentLoaded", (event) => {

  const es5Button = window.document.getElementById("es5-button");
  const es6Button = window.document.getElementById("es6-button");
  const favColorButton = window.document.getElementById("favColor-button");

  es5Button.addEventListener("click", () => { // Logs undefined, or doesn't log anything, or throws an error because this is wrong and is not accessing the actualy person, but instead it is accessing the global "this" that the function is in. 
    person1.greet();
    sorryAri();
    
  });

  es6Button.addEventListener("click", () => { // Logs 'Jane' which is the surrounding, lexical object. Using ES6 allows us to much easier access the "this", which makes it easy for us to use dot notation to find "this.variables"
    person2.greet();
  });

  favColorButton.addEventListener('click', () => {
     //this demonstrates that the values outside of the ES5 function, but still within the same "person" object are still available, and that is it solely the ES5 function which affects the lexical scope of "this"
    console.log(`Ari's favorite color is ${person1.favColor} and Jane's favorite color is ${person2.favColor}`);
    followUpQuestion();
  });

});

const followUpQuestion = () => {
  const isElement = document.getElementById("followUp");
  if(isElement) {
    isElement.remove();
  }
  const followUp = document.createElement("h3");
  followUp.id = "followUp";
  followUp.textContent = `If the first function could not access the ".name" variable of person1, why was the favColor variable able to be accessed?`;
  document.body.appendChild(followUp);
}

const sorryAri = () => {
  const elementAlreadyExists = document.getElementById("sorryMessage");
  if(elementAlreadyExists) {
    elementAlreadyExists.remove();
  }

  const pElement = document.createElement("p");
  pElement.id = "sorryMessage";
  pElement.textContent = "poor Ari, no one said hi to him =(";
  document.body.appendChild(pElement);
};