# ES5 vs. ES6 Password Hashing Examples

This project demonstrates the differences between ES5 and ES6 using password hashing with `bcrypt`. The examples show how ES5 exposes the password before hashing, while ES6 prevents premature access to the password, enforcing better security practices.

## 📁 Project Structure

The project is organized into different folders inside the `es5-lecture` directory. Each folder inside the root directory contains examples of ES5 and ES6 practices. Some folders may have a server.js which needs to be ran first, while others may just need to run the index.html. All of these folders will include any relevant code you will need to observe the differences and allow you to test these examples. 

es5-lecture/ ├── passwordLeak/ # ES5 and ES6 example securing the password before hashing │ └── server.js ├── public/ │ └── index.html # Frontend with forms to test ES5 and ES6 examples  ├── functionVariables/ # ES5 and ES6 example demonstrating variable leak due to function scoping ├── README.md # This README file └── package.json # Project dependencies

## 🧑‍💻 Getting Started

1. **Clone the repository**:
  
   git clone https://github.com/sudosurmrf/es5-es6-lecture.git
   run this line of code in your terminal: npm i
   cd into the folder with the example of your choice
   if the folder contains a server.js file, run this in your terminal: node server.js
   if the folder contains a server.js, also open a browser window and navigate to the following: http://localhost:3000
   
   (IF ON WINDOWS)if the folder only contains an index.html and an index.js, run this in your terminal: start index.html
   
   (IF ON MAC)if the folder only contains an index.html and an index.js, run this in your terminal: open index.html
   
   
