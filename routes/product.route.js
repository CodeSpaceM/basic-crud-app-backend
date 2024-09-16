const express = require('express')
const router = express.Router()

const {getProducts, getProduct, addProduct, updateProduct, deleteProduct} = require('../controllers/product.controller')

router.get('/', getProducts).get('/:id', getProducts).post('/', addProduct).put('/:id', updateProduct).delete('/:id', deleteProduct)

module.exports = router