const { products, product_type, city_states } = require("../models")

exports.getcms = async (req, res, next, id) => {
    try {
        const product = await products.findByPk(id, {
            include: [
                { model: product_type, attributes: ['id', 'product_type_name']},
                { model: city_states, attributes: ['id'] }]
        });
        if (product) {
            req.project = product;
            next();

        } else {
            return res.status(400).json({
                success: false,
                message: "Products does not exists."
            })
        }
     }
    catch (error) {
        return res.status(400).json({
            success: false,
            message: "Products does not exists."
        })
    }
}

exports.create = async (req, res) => {
    post = {
            product_type_id: req.body.product_type_id,
            product_code: req.body.product_code,
            title: req.body.title,
            price: req.body.price,
            address_1: req.body.address_1,
            address_2: req.body.address_2,
            city_id: req.body.city_id,
            description: req.body.description,
        }
    await products.create(post)
    .then(result =>{
        res.status(200).json({
            message: 'Successfully created',
            result: result
        })
    }).catch(err => {
        res.status(500).json({
        message: "somethong went wrong!",
        })
    })
}


exports.findAll = async (req, res) => {
    await products.findAll({
        include: [
            { model: product_type, attributes: ['id', 'product_type_name']},
            { model: city_states, attributes: ['id'] }],
    })
    .then(result =>{
        res.status(200).json({
            message: 'Successfully found',
            result: result
        })
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({
        message: "somethong went wrong!",
        })
    })
}



exports.findOne = async (req, res) => {
    const id = req.params.product_Id
    await products.findOne({
        where: {id: id},
        include: [
            { model: product_type, attributes: ['id', 'product_type_name']},
            { model: city_states, attributes: ['id'] }],
        })
    .then(result =>{
        res.status(200).json({
            message: 'Successfully found',
            result: result
        })
    })
    .catch(err => {
        res.status(500).json({
        message: "somethong went wrong!",
        })
    })
}

exports.update = async (req, res) => { 
    const id = req.params.product_Id
    await products.update(req.body, {where :{id:id}})
    .then(result =>{
        res.status(200).json({
            message: 'Successfully Updated',
        })
    }).catch(err => {
        res.status(500).json({
        message: "somethong went wrong!",
        })
    })
}

exports.delete = async (req, res) => {
    const id = req.params.product_Id
    await products.destroy({where: {id:id}})
    .then(result =>{
        res.status(200).json({
            message: "post deleted successfully!",
        })
    })
    .catch(err =>{
        res.status(200).json({
            message: "something went wrong!",
            err: err
        })
    })
}
