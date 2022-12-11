 
    const { ObjectId } = require('mongodb');
        const db = require('../connection');

        const getAllCategorys = async function (req, res) {
        let data = await db.get().collection('categorys').find().toArray()
        res.render('pages/allcategorys',{data});
        }

        const getCategoryAddform = async function (req, res) {
        res.render('forms/addcategory');
        }

        const addCategory = async function (req, res) {
        let data = req.body
        await db.get().collection('categorys').insertOne(data)
        res.render('pages/category', { data })
        }

        const getCategoryEditform = async function (req, res) {
        let id = req.params.id
        let data = await db.get().collection('categorys').findOne({ _id: ObjectId(id) })
        res.render('forms/editcategory', { data });
        }

        const editCategory = async function (req, res) {
        let newdata = req.body
        let query = { _id: ObjectId(req.body.id) }
        var newvalues = { $set: { name: newdata.name,} };
        await db.get().collection('categorys').updateOne(query, newvalues)
        res.redirect(`/categorys/${req.body.id}`)
        }

        const deleteCategory = async function (req, res) {
        let id = req.params.id
        await db.get().collection('categorys').deleteOne({ _id: ObjectId(id) })
        res.redirect('back')
        }

        const getCategoryById = async function (req, res) {
        let id = req.params.id
        let data = await db.get().collection('categorys').findOne({ _id: ObjectId(id) })
        res.render('pages/category', { data });
        }

        exports.getAllCategorys = getAllCategorys;
        exports.getCategoryAddform = getCategoryAddform;
        exports.addCategory = addCategory;
        exports.getCategoryEditform = getCategoryEditform;
        exports.editCategory = editCategory;
        exports.deleteCategory = deleteCategory;
        exports.getCategoryById = getCategoryById;
    