    
    const express = require("express");
    const router = express.Router();
    const booksController = require("../controllers/books-controller");

    router.get("/", booksController.getAllBooks);
    router.get('/add', booksController.getBookAddform);
    router.post("/add", booksController.addBook);
    router.get('/edit/:id',booksController.getBookEditform);
    router.post("/edit", booksController.editBook);
    router.get('/:id', booksController.getBookById);
    router.get("/delete/:id", booksController.deleteBook);

    module.exports = router;