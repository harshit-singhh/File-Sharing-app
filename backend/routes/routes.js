const express = require("express");
const { uploadImage, downloadImage }  = require("../controllers/image-controller");
const upload = require('../middleware/upload')

const router = express.Router();

router.post("/upload", upload.single('file'), uploadImage);
// :fileId is a variable field.. there fore we have written it like this
router.get("/file/:fileId", downloadImage);

module.exports = router;
