require("dotenv").config();
const connectToMongo = require("./db");
const express = require("express");

connectToMongo();
const app = express();
const port = 5000;

// middleware for send json body to DB
app.use(express.json());

// Avaiable Routes
app.use('/api/auth', require('./routes/auth'))
app.use('/api/notes', require('./routes/notes'))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
