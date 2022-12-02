const { Console } = require("console");
const express = require("express");
const http = require("http");
const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.static(__dirname + "/dist/portifolio-ang"));

app.get("/*", (req, res) => {
  res.sendFile(__dirname + "/dist/app-filme/index.html");
});
app.listen(PORT, () => {
  console.log("Servidor iniciado na porta => ", PORT);
});
