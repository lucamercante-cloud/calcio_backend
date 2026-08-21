"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const notizie_controller_1 = require("./notizie.controller");
const router = (0, express_1.Router)();
router.get('/', notizie_controller_1.listNw);
exports.default = router;
