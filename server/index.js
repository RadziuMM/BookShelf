const express = require("express");

const booksJson = require("./mocks/books.json");
const authorsJson = require("./mocks/authors.json");

const app = express();
const port = process.env.PORT || 3000;

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

app.get("/books", (req, res) => {
  res.json(booksJson);
});

app.get("/authors", (req, res) => {
  res.json(authorsJson);
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
