const express = require('express');
const router = express.Router();
const productcontroller  = require('../controllers/productcontroller');
const upload = require('../middleware/upload');

router.param("product_Id", productcontroller.getcms);
 
router.post("/product", upload.single('product_image'), productcontroller.create);

router.get("/product", productcontroller.findAll);

router.get("/product/:product_Id", productcontroller.findOne);

router.put("/product/:product_Id", upload.single('product_image'), productcontroller.update);

router.delete("/product/:product_Id", productcontroller.delete);

module.exports = router
