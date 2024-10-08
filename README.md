# ES5 vs. ES6 Password Hashing Examples

This project demonstrates the differences between ES5 and ES6 using password hashing with `bcrypt`. The examples show how ES5 exposes the password before hashing, while ES6 prevents premature access to the password, enforcing better security practices.

## 📁 Project Structure

The project is organized into different folders inside the `es5-lecture` directory. Each folder inside the root directory contains examples of ES5 and ES6 practices. Some folders may have a server.js which needs to be ran first, while others may just need to run the index.html. All of these folders will include any relevant code you will need to observe the differences and allow you to test these examples. 

es5-lecture/ ├── passwordLeak/ # ES5 and ES6 example exposing the password before hashing │ └── index.js └── index.html ├── functionVariables/ # ES5 example demonstrating variable leak due to function scoping │ └── server.js ├── es6-password/ # ES6 example securing the password before hashing │ └── server.js ├── public/ │ └── index.html # Frontend with forms to test ES5 and ES6 examples ├── README.md # This README file └── package.json # Project dependencies