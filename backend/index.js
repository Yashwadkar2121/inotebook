require("dotenv").config();
const connectToMongo = require("./db");
const express = require("express");
const cors = require("cors");

// Create express app
const app = express();
connectToMongo();

// Middleware
app.use(express.json());

const allowedOrigins = [
  "https://inotebook-silk.vercel.app",
  "http://localhost:3000",
];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin) return callback(null, true);
      if (allowedOrigins.indexOf(origin) === -1) {
        const msg =
          "The CORS policy for this site does not allow access from the specified Origin.";
        return callback(new Error(msg), false);
      }
      return callback(null, true);
    },
    methods: ["POST", "GET", "DELETE", "PUT"],
    credentials: true,
  })
);

// Routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/notes", require("./routes/notes"));
app.get("/", (req, res) => {
  res.send("Hello World from server");
});

// For Vercel: export handler
module.exports = app;
