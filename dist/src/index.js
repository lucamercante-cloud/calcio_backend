"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
require("reflect-metadata");
const node_http_1 = require("node:http");
const app_1 = __importDefault(require("./app"));
const mongoose_1 = __importDefault(require("mongoose"));
const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI || 'mongodb+srv://lucamercante_db_user:ciaociao999...@cluster0.6hwwica.mongodb.net/calcio_backend?appName=Cluster0';
const server = (0, node_http_1.createServer)(app_1.default);
server.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
mongoose_1.default.connect(MONGO_URI)
    .then(() => {
    console.log("Connected to MongoDB Atlas");
})
    .catch(err => {
    console.error("MongoDB connection error:", err);
});
