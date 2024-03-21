const express = require("express");
const bookModel = require("../model/book");
const bookRouter = express.Router();

// CRUD Routes ===> CREATE, READ, UPDATE, DELETE.

//READ
bookRouter.get("/", (req, res) => {
  // return all books
  bookModel
    .find({})
    .then((books) => {
      res.status(200).send(books);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send(err);
    });
});

//FIND AND RETURN BOOK BY ID
bookRouter.get("/:id", (req, res) => {
  const id = req.params.id;
  bookModel
    .findById(id)
    .then((books) => {
      res.status(200).send(books);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).send(err);
    });
});

//CREATE
bookRouter.post("/", (req, res) => {
  // Add book to the database.
  const book = req.body;
  bookModel
    .create(book)
    .then((book) => {
      res.status(201).send({
        message: "Book added Successfully!",
        data: book,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send(err.message);
    });
});

//UPDATE
bookRouter.put("/:id", (req, res) => {
  // Updating books in database.
  const id = req.params.id;
  const book = req.body;
  bookModel
    .findByIdAndUpdate(id, book, { new: true })
    .then((book) => {
      res.status(200).send({
        message: `Book with ID ${id} has been successfully updated.`,
        data: book,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send(err.message);
    });
});

//DELETE
bookRouter.delete("/:id", (req, res) => {
  // Deleting books in database.
  const id = req.params.id;
  // console.log(books);
  bookModel
    .findByIdAndDelete(id)
    .then((books) => {
      res.status(200).send({
        message: `Book with ID ${id} has been successfully deleted.`,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(400).send(err);
    });
});
module.exports = bookRouter;
