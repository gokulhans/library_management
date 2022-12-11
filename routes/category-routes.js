    
    const express = require("express");
    const router = express.Router();
    const categorysController = require("../controllers/categorys-controller");

    router.get("/", categorysController.getAllCategorys);
    router.get('/add', categorysController.getCategoryAddform);
    router.post("/add", categorysController.addCategory);
    router.get('/edit/:id',categorysController.getCategoryEditform);
    router.post("/edit", categorysController.editCategory);
    router.get('/:id', categorysController.getCategoryById);
    router.get("/delete/:id", categorysController.deleteCategory);

    module.exports = router;