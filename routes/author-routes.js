    
    const express = require("express");
    const router = express.Router();
    const authorsController = require("../controllers/authors-controller");

    router.get("/", authorsController.getAllAuthors);
    router.get('/add', authorsController.getAuthorAddform);
    router.post("/add", authorsController.addAuthor);
    router.get('/edit/:id',authorsController.getAuthorEditform);
    router.post("/edit", authorsController.editAuthor);
    router.get('/:id', authorsController.getAuthorById);
    router.get("/delete/:id", authorsController.deleteAuthor);

    module.exports = router;