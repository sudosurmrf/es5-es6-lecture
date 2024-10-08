# ES5 vs. ES6 Password Hashing Examples

This project demonstrates the differences between ES5 and ES6 using password hashing with `bcrypt`. The examples show how ES5 exposes the password before hashing, while ES6 prevents premature access to the password, enforcing better security practices.

## 📁 Project Structure

The project is organized into different folders inside the `es5-lecture` directory. Each folder inside the root directory contains examples of ES5 and ES6 practices. Some folders may have a server.js which needs to be ran first, while others may just need to run the index.html. All of these folders will include any relevant code you will need to observe the differences and allow you to test these examples. 

es5-lecture/ ├── passwordLeak/ # ES5 and ES6 example securing the password before hashing ├── scopingIssue / # ES5 and ES6 example demonstrating variable leak due to function scoping / ├── CleanerFunctions/ # ES5 and ES6 functions which show the simpler way to express functions using ES6. /├── thisIsBetter/ Using 2 separate objects, depicting how ES6 allows lexical scoping of "this" vs ES5 "this" accessing the global object /├── thatsClassy/ showing the difference of how ES6 helps achieve a more object-oriented user experience vs the ES5 alternative of using prototypes in the function constructors /├── syntaticSugarRush/ displaying what the "pyramid of doom" or "callback hell" used to look like, we can understand why the need for async/await and promises was needed, and how they changed Javascript asynchronous calls / ├── README.md # This README file └── package.json # Project dependencies

---

## 🧑‍💻 Getting Started

### 1. **Clone the repository**:
   
  
   git clone https://github.com/sudosurmrf/es5-es6-lecture.git

   run this line of code in your terminal: npm i

   **cd into the folder with the example of your choice** if you type "pwd" into your terminal, and it ends as "/es5-lecture" you're in the wrong folder.

   if the folder contains a server.js file, run this in your terminal: node server.js

   if the folder contains a server.js, also open a browser window and navigate to the following: http://localhost:3000

   
   
   (IF ON WINDOWS) - If the folder only contains an index.html and an index.js, run this in your terminal: start index.html

   (IF ON MAC) - If the folder only contains an index.html and an index.js, run this in your terminal: open index.html
   
   

⚡Example Scenarios:
### cleanerFunctions: 
A quick display page which helps demonstrate how both ES5 and ES6 functions do the same thing in terms of running functions, but ES6 is written in a much cleaner, easier and quicker way.

### scopingIssue: 
Shows how ES5's function-scoped variables can cause issues like variable leaks, and contrasts this with ES6's block-scoped variables.

### thisIsBetter:
Using two instances of an object, we show how the lexical (surrounding) scope of ES6 arrow functions allows for a more user-intended experience when accessing the "this" inside of an object and inside of a function inside of an object. 

### thatsClassy:
By showing how an object in ES5 was referred to when using syntax similar to object-oriented programming, we can see how ES6 has helped bridge the gap, along with making the syntax much cleaner and easier to read and write. 

### syntaticSugarRush
By allowing students to see how async functions used to be handled, in "callback hell" using .then and .finally, we can see how async await has made asynchronous calls much more readable and easier to write.

### passwordLeak:
 Demonstrates how ES5 exposes passwords before hashing while ES6 secures the password before hashing. Contains both an ES5 and ES6 example inside.


