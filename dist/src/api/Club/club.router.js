"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const club_controller_1 = require("./club.controller");
const router = (0, express_1.Router)();
router.get('/', club_controller_1.listCl);
exports.default = router;
