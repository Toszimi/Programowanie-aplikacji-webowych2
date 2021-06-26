const Product = require('../models/product.model');

const products = [];

exports.getAll = (req, res) => {
    res.status(200).send(products);
};

exports.add = (req, res) => {
    console.log(req.body);
    const product = new Product(req.body.id, req.body.name, req.body.description, req.body.price);
    products.push(product);
    res.status(201).send(product);
}
exports.update = (req, res) => {
    const id = req.body.id
    const name = req.body.name
    const description = req.body.description
    const price = req.body.price

    const newProduct = new Product(id, name, description, price);
    const searchId = products.findIndex((product) => product.id === id);

    products.splice(searchId, 1, newProduct);
    res.status(200).send(newProduct);

}
exports.delete = (req, res) => {
    console.log(req.params.id);

    const id = req.params.id;

    const searchID = products.findIndex((product) => product.id === id);

    const deleteProduct = products.splice(searchID, 1);
    res.status(200).send(deleteProduct);

}