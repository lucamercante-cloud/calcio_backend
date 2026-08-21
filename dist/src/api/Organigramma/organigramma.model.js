"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrganigrammaModel = void 0;
const mongoose_1 = require("mongoose");
const OrganigrammaSchema = new mongoose_1.Schema({
    nome: String,
    cognome: String,
    ruoloSocieta: String,
    foto: String,
}, { timestamps: true });
OrganigrammaSchema.set('toJSON', {
    virtuals: true,
    transform: (_, ret) => {
        delete ret._id;
        delete ret.__v;
        return ret;
    }
});
OrganigrammaSchema.set('toObject', {
    virtuals: true,
    transform: (_, ret) => {
        delete ret._id;
        delete ret.__v;
        return ret;
    }
});
exports.OrganigrammaModel = (0, mongoose_1.model)('Organigramma', OrganigrammaSchema);
