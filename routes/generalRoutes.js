const { Router } = require("express");
const generalController = require("../controllers/generalController");
const cpUpload = require("../middlewares/multer");

const route = Router();

route.post("/api/register", cpUpload, generalController.user_info);

module.exports = route;
