"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const organigramma_controller_1 = require("./organigramma.controller");
const router = (0, express_1.Router)();
router.get('/', organigramma_controller_1.listOrg);
exports.default = router;
