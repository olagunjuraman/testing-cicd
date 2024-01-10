// app.js
const express = require("express");
const app = express();
const PORT = 6000;

app.get("/", (req, res) => {
  res.send("Hello, Kubernetes with Traefik!");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
