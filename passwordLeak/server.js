const express = require('express');
const bcrypt = require('bcrypt');
const path = require('path');
const app = express();
const saltRounds = 10;

// Middleware to parse form data (only need this since we are only using a server and an index.html for this demo, with no other javascript code)
app.use(express.urlencoded({ extended: true }));

// Serve static HTML files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// ---------- Common Hashing Function ----------
function hashPassword(password, callback) {
  bcrypt.hash(password, saltRounds, (hashedPassword) => {
    callback(hashedPassword);
    }
  );
}

// ---------- ES5 Function (Exposes Password) ----------
function insecureHashPasswordES5(req, res) {
  var password = req.body.password;
  
  try{
    //if the password is attempted to be accessed, before it is sent to our hashing function below, the original plain text password is accessible due to the function scoping inside es5. 
    console.log("Attempting to log password (ES5):", password);
    res.send(`
      <p>${password}</p>
      <a href="/">Go Back</a>`)
      
    }catch(error){
      console.log(error);
    }
  // runs the bcrypt function if the catch block is true (this means if we do not see the below show up, that the password was leaked!)
  hashPassword(password, (hashedPassword) => {

      res.send(`
        <h1>The password was hashed and is now secure!</h1>
        <a href="/">Go Back</a>
      `);
    }
  );
}

// ---------- ES6 Function (Secure Hashing) ----------
const secureHashPasswordES6 = (req, res) => {
  
  try{
    console.log("Attempting to log password (ES6):", password);
    res.send(`
      <p>${password}</p>
      <a href="/">Go Back</a>`)
      
    }catch(error){
      console.log(error);
    }
    
  const password = req.body.password;
  //runs the same hashing function, since es6 allows for function AND block scoping, this will be contained in the block scope. If the above is NOT successful (the catch runs) then the originally intended code will run
  hashPassword(password, (hashedPassword) => {

    res.send(`
      <h1>The password was hashed and is now secure!</h1>
      <a href="/">Go Back</a>
    `);
  }
);
}


app.post('/hash-password-es5', insecureHashPasswordES5);
app.post('/hash-password-es6', secureHashPasswordES6);

app.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});
