import express from "express"
import expressAsyncHandler from "express-async-handler"
import Product from '../Models/productModel.js'

const Router = express.Router()

Router.post(
    '/add',
    expressAsyncHandler(async (req, res) => {

        // const Productname = await Department.findOne({ deptname: req.body.deptname })
        // if (Productname) return res.status(400).send('Product Name Already Exist')

        const product = new Product({
            name: req.body.name,
            brand: req.body.brand,
            image: req.body.image,
            price: req.body.price,
            department: req.body.department,
            category: req.body.category,
            description: req.body.description,
        });

        try {
            const createdProduct = await product.save();
            res.status(200).send(createdProduct)

        } catch (error) {
            res.status(400).send(error)
        }
    })
)

Router.put(
    '/update/:id',
    expressAsyncHandler(async (req, res) => {

        try {
            const product = await Product.findByIdAndUpdate(req.params.id, req.body, { useFindAndModify: false })
            res.status(200).send(product)

        } catch (error) {
            res.status(400).send(error)
        }

    })

)

Router.get(
    '/all',
    expressAsyncHandler(async (req, res) => {

        try {
            const products = await Product.find()
            res.status(200).send(products)
        } catch (error) {
            res.status(400).send(error)
        }
    })
)

Router.get(
    '/:category',
    expressAsyncHandler(async (req, res) => {
        const Category = req.params.category
        try {
            const products = await Product.find({ category: Category })
            res.status(200).send(products)
        } catch (error) {
            res.status(400).send(error)
        }

    })
)

Router.get(
    '/:id',
    expressAsyncHandler(async (req, res) => {

        try {
            const product = await Product.findById(req.params.id)
            res.status(200).send(product)
        } catch (error) {
            res.status(400).send(error)
        }

    })
)


Router.delete(
    '/remove/:id',
    expressAsyncHandler(async (req, res) => {

        try {
            const product = await Product.findByIdAndRemove(req.params.id, { useFindAndModify: false })
            res.status(200).send(product)
        } catch (error) {
            res.status(400).send(error)
        }

    })
)


export default Router