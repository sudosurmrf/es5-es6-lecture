// ES5 Constructor Function
function Person1(name, age) {
  this.name = name;
  this.age = age;
}

Person1.prototype.greet = function() {
  return 'Hello ' + this.name + ' from ES5!';
};

// ES6 Class
class Person {
  constructor(name, age) {
      this.name = name;
      this.age = age;
  }

  greet() {
      return `Hello ${this.name} from ES6!`;
  }
}


window.document.addEventListener("DOMContentLoaded", (event) => {

  const es5Button = document.getElementById("es5-button");
  const es6Button = document.getElementById("es6-button");
  const resultText = document.getElementById("result-text");
  const advantageText = document.getElementById("advantage-text");
  const consoleText = document.getElementById("console-text");


  const getInputValues = () => {
    const name = document.getElementById("name-input").value;
    const age = document.getElementById("age-input").value;
    return { name, age };
  };

//used to reset the advantage message created on click
  const resetMessages = () => {
    advantageText.textContent = "";
    consoleText.textContent = "Console Output:";
  };

  
  es5Button.addEventListener("click", () => {
    const { name, age } = getInputValues();
    resetMessages();

    if (name && age) {
      const person1 = new Person1(name, age); //creating a new person using the ES5 function constructor
      resultText.textContent = person1.greet() + ` You are ${age} years old.`; //using template literals to concat a sentence which uses a string and the values of multiple variables.

      //How I hijacked the console and output it into our DOM. 
      consoleText.textContent += `\n> Created person using ES5: ${JSON.stringify(person1)}`;
      advantageText.textContent = "ES5 requires using prototypes for inheritance. ES6 classes make this simpler.";

    } else {
      resultText.textContent = "Please enter both a name and age.";
    }
  });

  es6Button.addEventListener("click", () => {
    const { name, age } = getInputValues();
    resetMessages();

    if (name && age) {
      const person = new Person(name, age); //creating a new person using the ES6 class
      resultText.textContent = person.greet() + ` You are ${age} years old.`; //again using template literals to concat a sentance

      //more console hijacking
      consoleText.textContent += `\n> Created person using ES6: ${JSON.stringify(person)}`;
      advantageText.textContent = "ES6 classes offer a cleaner and more intuitive syntax for object creation and inheritance.";
      
    } else {
      resultText.textContent = "Please enter both a name and age.";
    }
  });
});
