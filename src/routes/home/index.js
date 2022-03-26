"use strict";

const express = require("express");
const ctrl = require("./home.ctrl");
const router = express.Router();

router.get("/", ctrl.output.index);
router.get("/login", ctrl.output.login);
router.get("/register", ctrl.output.register);
router.get("/introduce", ctrl.output.introduce);
router.get("/game", ctrl.output.game);
router.get("/ai", ctrl.output.ai);

router.post("/login", ctrl.process.login);
router.post("/register", ctrl.process.register);

module.exports = router;
