const multer = require("multer");
const upload = multer({ dest: 'uploads/' })

  
const cpUpload = upload.fields([{ name: 'images', maxCount: 3 }])

module.exports = cpUpload;