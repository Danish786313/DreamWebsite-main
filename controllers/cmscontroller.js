const { cms } = require("../models")

exports.getcms = async (req, res, next, id) => {
   console.log("get_cms")
   next()
}

exports.create = async (req, res) => {
    await cms.create(req.body)
    .then(result =>{
        res.status(200).json({
            message: 'Successfully created',
        })
    }).catch(err => {
        res.status(500).json({
        message: "somethong went wrong!",
        })
    })
}


exports.findAll = async (req, res) => {
    await cms.findAll()
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



exports.findOne = async (req, res) => {
    await cms.findOne()
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
    console.log("================================") 
    id = req.params.cms_Id
    await cms.update(req.body, {where :{id:id}})
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
    const id = req.params.cms_Id
    await cms.destroy({where: {id:id}})
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
