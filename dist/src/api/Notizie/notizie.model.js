"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NewsModel = void 0;
const mongoose_1 = require("mongoose");
const NewsSchema = new mongoose_1.Schema({
    titolo: String,
    desc: String,
    img: String,
    date: { type: Date, default: Date.now }
}, { timestamps: true });
NewsSchema.set('toJSON', {
    virtuals: true,
    transform: (_, ret) => {
        delete ret._id;
        delete ret.__v;
        delete ret.createdAt;
        delete ret.updatedAt;
        return ret;
    }
});
NewsSchema.set('toObject', {
    virtuals: true,
    transform: (_, ret) => {
        delete ret._id;
        delete ret.__v;
        delete ret.createdAt;
        delete ret.updatedAt;
        return ret;
    }
});
exports.NewsModel = (0, mongoose_1.model)('News', NewsSchema);
