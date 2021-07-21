const express = require("express");
const connection = require('./db/config');
const app = express();;

const port = 8001;

connection.connect((err) => {
  if (err) {
    console.error("error connecting: " + err.stack);
  } else {
    console.log(
      "connected to database with threadId :  " + connection.threadId
    );
  }
});



app.listen(port, () => {
  console.log(`Server running on ${port}`);
});
