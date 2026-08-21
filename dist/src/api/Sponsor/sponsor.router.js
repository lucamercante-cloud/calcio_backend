"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const sponsor_controller_1 = require("./sponsor.controller");
const router = (0, express_1.Router)();
router.get('/', sponsor_controller_1.listSp);
exports.default = router;
