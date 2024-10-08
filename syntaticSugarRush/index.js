const updateLog = (text) => {
  let resultElement = document.getElementById('result-text');
  resultElement.textContent += text + '\n'; 
}

const clearLogAndResult = () => {
  document.getElementById('result-text').textContent = '';
}

/* 
------------------------------------
Start of ES5 code 
*/
function fetchData(callback) {
  setTimeout(function() {
    callback('Fetched data (Callback Hell)');
  }, 1000);
}

function processData(callback) {
  setTimeout(function() {
    callback('Processed data');
  }, 1000);
}

function saveData(callback) {
  setTimeout(function() {
    callback('Saved data');
  }, 1000);
}

function runCallbackHell() {
  clearLogAndResult();
  updateLog('Starting ES5 callback hell...');

  fetchData(function(result1) {
    updateLog(result1);

    processData(function(result2) {
      updateLog(result2);

      saveData(function(result3) {
        updateLog(result3);
        updateLog('All done (Callback Hell)!');
      });
    });
  });

  // More callbacks that cause the "pyramid of doom" or "callback hell"
  fetchData(function() {
    processData(function() {
      saveData(function() {
        fetchData(function() {
          processData(function() {
            saveData(function() {
              updateLog('More Callback Hell...');
            });
          });
        });
      });
    });
  });
}

/*ES5 ends here
---------------------------------------------------------------
  ES6 starts here
*/

// Async/Await Example
const fetchDataAsync = async() => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('Fetched data (Async/Await)');
    }, 1000);
  });
}

const processDataAsync = async() => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('Processed data');
    }, 1000);
  });
}

const saveDataAsync = async() => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('Saved data');
    }, 1000);
  });
}

const runAsyncAwait = async() => {
  clearLogAndResult();
  updateLog('Starting ES6 async/await...');

  const result1 = await fetchDataAsync();
  updateLog(result1);

  const result2 = await processDataAsync();
  updateLog(result2);

  const result3 = await saveDataAsync();
  updateLog(result3);

  updateLog('All done (Async/Await)!');
}


/* 
end of ES6 code
--------------------------------------
*/

document.getElementById('callback-hell-button').addEventListener('click', runCallbackHell);
document.getElementById('async-await-button').addEventListener('click', runAsyncAwait);
