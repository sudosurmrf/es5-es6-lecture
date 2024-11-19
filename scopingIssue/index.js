document.addEventListener("DOMContentLoaded", (event) => {

  
  const es5Leak = () => {
    const funcs = [];
    
    for (var i = 0; i < 3; i++) { //this line has the ONLY difference between the es5 version on top, and the es6 version below. 
      funcs.push(function() {
        return i; // At the time of function invocation, `i` will always be 3 since the "var" symbol infront of the "i" causes the variable to leak and then changes each returned value to the final value of "i"
      });
    }
    
    // All functions will return 3 because `i` was leaked and changed globally
    console.log(funcs[0]()); // 3
    console.log(funcs[1]()); // 3
    console.log(funcs[2]()); // 3
  };
  
  
  
  const es6NoLeak = () => {
    const funcs = [];
    
    for (let i = 0; i < 3; i++) {
      funcs.push(function() {
        return i; // `i` is block-scoped, so each function captures a different `i`
      });
    }
    
    // Each function will return its own captured value of `i`
    console.log(funcs[0]()); // 0
    console.log(funcs[1]()); // 1
    console.log(funcs[2]()); // 2
  }
  
  
  
  const es5Click = window.document.getElementById("es5-button");
  const es6Click = window.document.getElementById("es6-button");
  es5Click.addEventListener("click", es5Leak);
  es6Click.addEventListener("click", es6NoLeak);
  
});