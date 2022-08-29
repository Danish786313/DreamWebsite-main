const express = require('express');
const router = express.Router();
const cmscontroller  = require('../controllers/cmscontroller');

router.param("cms_Id", cmscontroller.getcms);
 
router.post("/cms", cmscontroller.create);

router.get("/cms", cmscontroller.findAll);

router.get("/cms/:cms_Id", cmscontroller.findOne);

router.put("/cms/:cms_Id", cmscontroller.update);

router.delete("/cms/:cms_Id", cmscontroller.delete);

module.exports = router
