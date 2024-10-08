// ES5 function
function es5Sum(a, b) {
  return a + b;
}

// ES6 arrow function
const es6Sum = (a, b) => a + b;

window.document.addEventListener("DOMContentLoaded", (event) => {
  const es5Button = window.document.getElementById("es5-button");
  const es6Button = window.document.getElementById("es6-button");

  // Function to display the result on screen
  let displayResultOnScreen = (result) => {
    const resultElement = window.document.createElement("p");
    resultElement.textContent = `Result: ${result}`; //using es6, we can use template literals in our code, which makes it easier to write and extrapolate what the code does. 
    document.body.appendChild(resultElement);
  };

  //Event listeners for each button click, which runs the specific function using the two values 5 and 10; The first function also uses an es5 variation of an anonymous function, whereas the es6 function shows the ease of use of an arrow function.
  es5Button.addEventListener("click", function() {
    const result = es5Sum(5, 10);
    displayResultOnScreen(result);
  });

  es6Button.addEventListener("click", () => {
    const result = es6Sum(5, 10);
    displayResultOnScreen(result);
  });
});
