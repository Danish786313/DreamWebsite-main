const express = require('express');
const router = express.Router();
const gallery = require("../controllers/galleryCategoryController")
//const { validate } = require('../validator/validate')

    router.param("gallerycategeryId", gallery.getgallerycategory);

    router.post("/gallerycategery",gallery.create);

    router.get("/gallerycategery",gallery.findAll);

    // router.get("/gallery/:galleryId",gallery.findById);

    // router.put("/department/:departmentId",isSignedIn,getLogedInUser,isAccessable,hasPermissionUpdate,updateDepartmentValidation(),validate, department.update);

    // router.delete("/department/:departmentId",isSignedIn,getLogedInUser,isAccessable,hasPermissionDelete,department.delete);
module.exports = router