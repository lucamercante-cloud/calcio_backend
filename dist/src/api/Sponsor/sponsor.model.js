"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SponsorModel = void 0;
const mongoose_1 = require("mongoose");
const SponsorSchema = new mongoose_1.Schema({
    nome: String,
    logo: String,
}, { timestamps: true });
SponsorSchema.set('toJSON', {
    virtuals: true,
    transform: (_, ret) => {
        delete ret._id;
        delete ret.__v;
        return ret;
    }
});
SponsorSchema.set('toObject', {
    virtuals: true,
    transform: (_, ret) => {
        delete ret._id;
        delete ret.__v;
        return ret;
    }
});
exports.SponsorModel = (0, mongoose_1.model)('Sponsor', SponsorSchema);
