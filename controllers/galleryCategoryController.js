const {sequelize,gallery_category} = require('../models')


exports.getgallerycategory = async (req, res, next, id) => {
    try {
        const gallerycategory = await gallery_category.findByPk(id);
        if (gallerycategory) {
            req.gallerycategory = gallerycategory;
            next();
        } else {
            throw "gallery_category does not exists.";
        }
    } catch (error) {
        return res.status(400).json({
            success: false,
            message: "gallery_category does not exists.",
            error: error
        })
    }
}


exports.create = async (req, res) => {
    try {
        const gallerycategory = await gallery_category.create(req.body);
        return res.status(200).json({
            success: true,
            message: "Department created successfully.",
            gallerycategory: gallerycategory
        })
    } catch (error) {
        return res.status(400).json({
            success: false,
            message: "Error creating gallerycategory.",
            error: error
        })
    }
}

exports.findAll = async (req, res) => {
    try {


        const gallerycategory = await gallery_category.findAll({

            order: [['createdAt', 'DESC']],

        });

        return res.status(200).json({
            success: true,
            message: "All Departments fetched successfully.",
            gallerycategory: gallerycategory,

        })
    } catch (error) {
        return res.status(400).json({
            success: false,
            message: "Error fetching departments.",
            error: error
        })
    }
}
