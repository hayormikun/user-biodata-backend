const { Router } = require("express");
const generalController = require("../controllers/generalController");

const route = Router();

route.post("/api/register", generalController.user_info);

module.exports = route;
