"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const node_http_1 = require("node:http");
const app_1 = __importDefault(require("./app"));
const mongoose_1 = __importDefault(require("mongoose"));
const server = (0, node_http_1.createServer)(app_1.default);
mongoose_1.default.set("debug", true);
mongoose_1.default.connect('mongodb://localhost:27017/calcio_backend')
    .then(() => {
    server.listen(3000, () => {
        console.log(`server listening on port 3000`);
    });
})
    .catch(err => {
    console.log(err);
});
