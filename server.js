// Init Express
const express = require("express");
const app = express();

// Connect Database
const connectDB = require("./config/db");
connectDB();

// Init middleware
app.use(express.json({ extended: false }));

// GET Request
app.get("/", (req, res) =>
  res.json({ msg: "Welcome to the Contact Keeper API" })
);

// Define routes
app.use("/api/users", require("./routes/users"));
app.use("/api/auth", require("./routes/auth"));
app.use("/api/contacts", require("./routes/contacts"));

// Init PORT production and development
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
