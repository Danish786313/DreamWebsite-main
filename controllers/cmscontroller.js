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
            result: result
        })
    }).catch(err => {
        res.status(500).json({
        message: "somethong went wrong!",
        err: error
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
        err: error
        })
    })
}



exports.findOne = async (req, res) => {
    const id = req.params.cms_Id
    await cms.findOne({where: {id:id}})
    .then(result =>{
        res.status(200).json({
            message: 'Successfully found',
            result: result
        })
    })
    .catch(err => {
        res.status(500).json({
        message: "somethong went wrong!",
        err: error
        })
    })
}

exports.update = async (req, res) => {
    const id = req.params.cms_Id
    await cms.update(req.body, {where :{id: id}})
    .then(result =>{
        res.status(200).json({
            message: 'Successfully Updated',
            result: result
        })
    }).catch(err => {
        res.status(500).json({
        message: "somethong went wrong!",
        err: err
        })
    })
}

exports.delete = async (req, res) => {
    const id = req.params.cms_Id
    await cms.destroy({where: {id:id}})
    .then(result =>{
        res.status(200).json({
            message: "post deleted successfully!",
            result: result
        })
    })
    .catch(err =>{
        res.status(200).json({
            message: "something went wrong!",
            err: err
        })
    })
}
