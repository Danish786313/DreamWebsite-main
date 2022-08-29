
const {sequelize,Gallery} = require('../models')


exports.getgallery = async (req, res, next, id) => {
    try {
        const gallery = await Gallery.findByPk(id);
        if (gallery) {
            req.gallery = gallery;
            next();
        } else {
            throw "gallery does not exists.";
        }
    } catch (error) {
        return res.status(400).json({
            success: false,
            message: "gallery does not exists.",
            error: error
        })
    }
}


exports.create = async (req, res) => {
    try {
        
        const gallery = await Gallery.create(req.body);

        return res.status(200).json({
            success: true,
            message: "Gallery created successfully.",
            gallery: gallery
        })
    } catch (error) {
        return res.status(400).json({
            success: false,
            message: "Error creating gallery.",
            error: error
        })
    }
}

exports.findAll = async (req, res) => {
    try {
        
        const gallery = await Gallery.findAll({ });

        return res.status(200).json({
            success: true,
            message: "All Gallery fetched successfully.",
            gallery: gallery,

        })
    } catch (error) {
        return res.status(400).json({
            success: false,
            message: "Error fetching gallery.",
            error: error
        })
    }
}


// To fetch Department by Id
exports.findById = async (req, res) => {
    try {
        console.log(req.gallery);
        return res.status(200).json({
            success: true,
            message: "Gallery fetched successfully.",
            gallery: req.gallery
        })
    } catch (error) {
        return res.status(400).json({
            success: false,
            message: "Error fetching the gallery.",
            error: error
        })
    }
}

exports.update = async (req, res) => {
    try {
    //    req.body =json.parse(req.body);
        const gallery = await Gallery.update(req.body, { where: { id: req.params.galleryId }, returning: true, plain: true });
        
        return res.status(200).json({
            success: true,
            message: "gallery updated successfully.",
            gallery: gallery
        })
    } catch (error) {
        console.log(error);
        return res.status(400).json({
            success: false,
            message: "Error updating the gallery.",
            error: error
        })
    }
}

exports.delete = async (req, res) => {
    try {
        const gallery = await Gallery.destroy({ where: { id: req.params.galleryId } });
        return res.status(200).json({
            success: true,
            message: "Gallery deleted successfully.",
            gallery: gallery
        })
    } catch (error) {
        return res.status(400).json({
            success: false,
            message: "Error deleting the gallery.",
            error: error
        })
    }
}