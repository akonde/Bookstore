const express = require("express");
const bookRouter = express.Router();

// CRUD Routes ===> CREATE, READ, UPDATE, DELETE.

//READ
bookRouter.get("/", (req, res) => {
  // return all books
  res.send("Book routes!");
});

//FIND AND RETURN BOOK BY ID
bookRouter.get("/:id", (req, res) => {
  const id = req.params.id;
  res.send(`Get Book with id ${id}`);
});

//CREATE
bookRouter.post("/", (req, res) => {
  // Add book to the database.
  console / log(books);
  res.send("Books added!");
});

//UPDATE
bookRouter.put("/:id", (req, res) => {
  // Updating books in database.
  const id = req.params.id;
  console.log(books);
  res.send(`Books updated ${id}`);
});

//DELETE
bookRouter.delete("/:id", (req, res) => {
  // Deleting books in database.
  const id = req.params.id;
  console.log(books);
  res.send(`Books with ${id} deleted`);
});
module.exports = bookRouter;
