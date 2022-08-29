const express = require('express');
const router = express.Router();
const productType = require("../controllers/productTypeController")



    router.param("productTypeId", productType.getproduct_type);

    router.post("/productType",productType.create);

    router.get("/productType",productType.findAll);

    router.get("/productType/:productTypeId",productType.findById);

    router.put("/productType/:productTypeId",productType.update);

    router.delete("/productType/:productTypeId",productType.delete);

    module.exports = router