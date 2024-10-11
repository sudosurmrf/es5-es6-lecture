const logToScreen = (message, isError = false) => {
  const consoleDiv = document.getElementById('consoleLog');
  const logMessage = document.createElement('div');
  logMessage.textContent = message;
  logMessage.className = isError ? 'error' : 'success';
  consoleDiv.appendChild(logMessage);
  consoleDiv.scrollTop = consoleDiv.scrollHeight;
}

const runExample = () => {
  document.getElementById('consoleLog').innerHTML = ''; // This function is solely to clear the log.

  // ES5 Function Declaration - Hoisting works here due to the use of an ES5 function. 
  logToScreen("Trying to call the ES5 function before its declaration:");
  try {
    es5Function();
  } catch (error) {
    logToScreen("Error: " + error.message, true);
  }

  function es5Function() {
    logToScreen("Ahoy! This ES5 function be hoisted to the top! It was called before it's initialization");
  }

  // ES6 Function Expression (using let) - No Hoisting
  logToScreen("Calling the ES6 function expression before its declaration:");
  try {
    es6Function(); // This will throw an error since it has not been init yet. 
  } catch (error) {
    logToScreen("Arrr! Error: " + error.message, true);
  }

  let es6Function = function() { //this function, although set equal to an ES5 function, does not hoist due to the "let" declaration. 
    logToScreen("Arrr! This ES6 function did not hoist! ");
  };

  // ES6 Arrow Function (using const) - No Hoisting
  logToScreen("Calling the ES6 arrow function before its declaration:");
  try {
    es6ArrowFunction(); // Since this function was created using the ES6 inclusion of "const" the function is not hoisted.
  } catch (error) {
    logToScreen("Shiver me timbers! Error: " + error.message, true);
  }

  const es6ArrowFunction = () => {
    logToScreen("This ES6 arrow function stays anchored, no hoisting in sight!");
  };

  // Calling functions after declarations allows us to now finally see the desired output.
  logToScreen("Calling functions after their declarations:");
  es5Function();
  es6Function();
  es6ArrowFunction();
}
