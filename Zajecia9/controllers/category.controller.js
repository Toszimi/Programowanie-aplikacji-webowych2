const Category = require('../models/category.model');

const categories = [];

exports.getAll = (req, res) => {
    res.status(200).send(categories);
};

exports.add = (req, res) => {
    console.log(req.body)
    const category = new Category(req.body.id, req.body.name, req.body.quantity);
    categories.push(category);
    res.status(201).send(category);

};

exports.update = (req, res) => {

    const id = req.body.id;
    const name = req.body.name;
    const quantity = req.body.quantity;

    const newCategory = new Category(id, name, quantity);
    const searchID = categories.findIndex(
        (category) => category.id === id
    );

    categories.splice(searchID, 1, newCategory);
    res.status(200).send(newCategory);
};

exports.delete = (req, res) => {
    const id = req.params.id;

    const searchID = categories.findIndex(
        (category) => category.id === id
    );

    const deleteCategory = categories.splice(searchID, 1);
    res.status(200).send(deleteCategory);
};