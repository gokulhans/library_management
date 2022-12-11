 
    const { ObjectId } = require('mongodb');
        const db = require('../connection');

        const getAllBooks = async function (req, res) {
        let data = await db.get().collection('books').find().toArray()
        res.render('pages/allbooks',{data});
        }

        const getBookAddform = async function (req, res) {
        res.render('forms/addbook');
        }

        const addBook = async function (req, res) {
        let data = req.body
        await db.get().collection('books').insertOne(data)
        res.render('pages/book', { data })
        }

        const getBookEditform = async function (req, res) {
        let id = req.params.id
        let data = await db.get().collection('books').findOne({ _id: ObjectId(id) })
        res.render('forms/editbook', { data });
        }

        const editBook = async function (req, res) {
        let newdata = req.body
        let query = { _id: ObjectId(req.body.id) }
        var newvalues = { $set: { name: newdata.name,} };
        await db.get().collection('books').updateOne(query, newvalues)
        res.redirect(`/books/${req.body.id}`)
        }

        const deleteBook = async function (req, res) {
        let id = req.params.id
        await db.get().collection('books').deleteOne({ _id: ObjectId(id) })
        res.redirect('back')
        }

        const getBookById = async function (req, res) {
        let id = req.params.id
        let data = await db.get().collection('books').findOne({ _id: ObjectId(id) })
        res.render('pages/book', { data });
        }

        exports.getAllBooks = getAllBooks;
        exports.getBookAddform = getBookAddform;
        exports.addBook = addBook;
        exports.getBookEditform = getBookEditform;
        exports.editBook = editBook;
        exports.deleteBook = deleteBook;
        exports.getBookById = getBookById;
    