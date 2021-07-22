const express = require("express");
const app = express();
const cors = require("cors");
const connection = require("./db/config");
const postRoute = require("./routes/post-route");

const port = 8001;
app.use(express.json());
app.use(cors({ origin: true, methods: ["GET", "POST"], credentials: true }));

connection.connect((err) => {
  if (err) {
    console.error("error connecting: " + err.stack);
  } else {
    console.log(
      "connected to database with threadId :  " + connection.threadId
    );
  }
});

app.use("/posts", postRoute);

app.listen(port, () => {
  console.log(`Server running on ${port}`);
});
