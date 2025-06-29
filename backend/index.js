require("dotenv").config();
const connectToMongo = require("./db");
const express = require("express");
const cors = require("cors");

connectToMongo();
const app = express();
const port = process.env.PORT || 5000;

// CORS Configuration
const allowedOrigins = [
  "http://localhost:3000",
  "https://inotebook-silk.vercel.app",
  "https://inotebook-9x17.vercel.app", // Add your Vercel URL here
];

app.use(
  cors({
    origin: allowedOrigins, // Directly pass allowed origins
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    credentials: true,
  })
);

// Handle OPTIONS Preflight Requests
app.options("*", cors()); // Allow all OPTIONS requests

// Middleware
app.use(express.json());

// Routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/notes", require("./routes/notes"));

app.get("/", (req, res) => {
  res.send("iNotebook Backend Running");
});

// Start server only in local development
if (process.env.NODE_ENV !== "production") {
  app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
  });
}

// Export for Vercel
module.exports = app;
