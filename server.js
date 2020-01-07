// Init Express
const express = require("express");
const app = express();

// GET Request
app.get("/", (req, res) =>
  res.json({ msg: "Welcome to the Contact Keeper API" })
);

// Init PORT production and development
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
