document.getElementById('runButton').addEventListener('click', () => {
 
  const input1 = parseFloat(document.getElementById('input1').value);
  const input2 = parseFloat(document.getElementById('input2').value);

  runEs5(input1, input2);
  runEs6(input1, input2);
});

// ES5 function module to simulate and show results
function runEs5(x, y) {
  clearResult(); 

  var mathModule = (function() {
    var privateVar = 42;

    function add(x, y) {
      return x + y;
    }

    return {
      add: add,
      answer: privateVar
    };
  })();

  var result = mathModule.add(x, y);
  updateLog('ES5 Result: ' + result); 
  updateLog('The answer to everything is: ' + mathModule.answer);
}

// Function to simulate ES6 module and show results
const runEs6 = (x, y) => {
  const answer = 42;

  const add = (x, y) => {
    return x + y;
  };

  const result = add(x, y);
  updateLog('ES6 Result: ' + result);
  updateLog('The answer to everything is: ' + answer);
}


const updateLog = (text) => {
  const resultText = document.getElementById('resultText');
  const p = document.createElement('p');
  p.textContent = text;
  resultText.appendChild(p);
}

const clearResult = () => {
  const resultText = document.getElementById('resultText');
  resultText.innerHTML = '<h3>Result Console</h3>';
}
