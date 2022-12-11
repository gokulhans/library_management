 
    const { ObjectId } = require('mongodb');
        const db = require('../connection');

        const getAllAuthors = async function (req, res) {
        let data = await db.get().collection('authors').find().toArray()
        res.render('pages/allauthors',{data});
        }

        const getAuthorAddform = async function (req, res) {
        res.render('forms/addauthor');
        }

        const addAuthor = async function (req, res) {
        let data = req.body
        await db.get().collection('authors').insertOne(data)
        res.render('pages/author', { data })
        }

        const getAuthorEditform = async function (req, res) {
        let id = req.params.id
        let data = await db.get().collection('authors').findOne({ _id: ObjectId(id) })
        res.render('forms/editauthor', { data });
        }

        const editAuthor = async function (req, res) {
        let newdata = req.body
        let query = { _id: ObjectId(req.body.id) }
        var newvalues = { $set: { name: newdata.name,} };
        await db.get().collection('authors').updateOne(query, newvalues)
        res.redirect(`/authors/${req.body.id}`)
        }

        const deleteAuthor = async function (req, res) {
        let id = req.params.id
        await db.get().collection('authors').deleteOne({ _id: ObjectId(id) })
        res.redirect('back')
        }

        const getAuthorById = async function (req, res) {
        let id = req.params.id
        let data = await db.get().collection('authors').findOne({ _id: ObjectId(id) })
        res.render('pages/author', { data });
        }

        exports.getAllAuthors = getAllAuthors;
        exports.getAuthorAddform = getAuthorAddform;
        exports.addAuthor = addAuthor;
        exports.getAuthorEditform = getAuthorEditform;
        exports.editAuthor = editAuthor;
        exports.deleteAuthor = deleteAuthor;
        exports.getAuthorById = getAuthorById;
    