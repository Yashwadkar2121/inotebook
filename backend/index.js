require("dotenv").config();
const connectToMongo = require("./db");
const express = require("express");
var cors = require("cors");

connectToMongo();
const app = express();
const port = process.env.PORT || 5000;

// middleware for send json body to DB
app.use(express.json());
app.use(
  cors({
    origin: ["https://inotebook-p3z7.vercel.app/login"],
    methods: ["POST", "GET", "DELETE", "PUT"],
    credentials: true,
  })
);

// Avaiable Routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/notes", require("./routes/notes"));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
