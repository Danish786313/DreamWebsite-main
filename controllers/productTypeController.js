const {sequelize,product_type} = require('../models')


exports.getproduct_type = async (req, res, next, id) => {
    try {
        const producttype = await product_type.findByPk(id);
        if (producttype) {
            req.producttype = producttype;
            next();
        } else {
            throw "producttype does not exists.";
        }
    } catch (error) {
        return res.status(400).json({
            success: false,
            message: "producttype does not exists.",
            error: error
        })
    }
}


exports.create = async (req, res) => {
    try {
        
        const producttype = await product_type.create(req.body);

        return res.status(200).json({
            success: true,
            message: "producttype created successfully.",
            producttype: producttype
        })
    } catch (error) {
        return res.status(400).json({
            success: false,
            message: "Error creating producttype.",
            error: error
        })
    }
}

exports.findAll = async (req, res) => {
    try {
        
        const producttype = await product_type.findAll({ });

        return res.status(200).json({
            success: true,
            message: "All producttype fetched successfully.",
            producttype: producttype,

        })
    } catch (error) {
        return res.status(400).json({
            success: false,
            message: "Error fetching producttype.",
            error: error
        })
    }
}


// To fetch Department by Id
exports.findById = async (req, res) => {
    try {
      
        return res.status(200).json({
            success: true,
            message: "producttype fetched successfully.",
            producttype: req.producttype
        })
    } catch (error) {
        return res.status(400).json({
            success: false,
            message: "Error fetching the producttype.",
            error: error
        })
    }
}

exports.update = async (req, res) => {
    try {
    //    req.body =json.parse(req.body);
        const producttype = await product_type.update(req.body, { where: { id: req.params.producttypeId }, returning: true, plain: true });
        
        return res.status(200).json({
            success: true,
            message: "producttype updated successfully.",
            producttype: producttype
        })
    } catch (error) {
        console.log(error);
        return res.status(400).json({
            success: false,
            message: "Error updating the producttype.",
            error: error
        })
    }
}

exports.delete = async (req, res) => {
    try {
        const producttype = await product_type.destroy({ where: { id: req.params.producttypeId } });
        return res.status(200).json({
            success: true,
            message: "Gallery deleted successfully.",
            producttype: producttype
        })
    } catch (error) {
        return res.status(400).json({
            success: false,
            message: "Error deleting the producttype.",
            error: error
        })
    }
}