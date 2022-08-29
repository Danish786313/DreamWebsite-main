const express = require('express');
const router = express.Router();
const gallery = require("../controllers/galleryController")
const upload = require('../middleware/upload');


    router.param("galleryId", gallery.getgallery);

    router.post("/gallery",upload.single('image'),gallery.create);

    router.get("/gallery",gallery.findAll);

    router.get("/gallery/:galleryId",gallery.findById);

    router.put("/gallery/:galleryId",gallery.update);

    router.delete("/gallery/:galleryId",gallery.delete);

    module.exports = router