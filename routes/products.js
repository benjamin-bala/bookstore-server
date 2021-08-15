const router = require('express').Router()
const Products = require('../models/products')

//Get product
router.route('/').get((req,res) => {
    Products.find()
    .then(products => res.json(products))
    .catch(err => res.status(400).json('Error ' + err))
})


router.route('/productid').get((req,res) => {
    const { id } = req.query

    Products.findById(id)
    .then(product => res.json(product))
    .catch(err => res.status(400).json('Error ' + err))
})

//Add product
router.route('/add').post((req,res) => {
    const {title,price,description,image,category,type,file} = req.body

    const newProduct = new Products({
        title,
        price,
        description,
        image,
        category,
        type,
        file
    })

    newProduct.save()
    .then(() => res.json('Product added!'))
    .catch(err => res.status(400).json('Error: ' + err))
})

module.exports = router
