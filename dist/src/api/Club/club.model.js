"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClubsModel = void 0;
const mongoose_1 = require("mongoose");
const ClubsSchema = new mongoose_1.Schema({
    nome: String,
    indirizzoSede: String,
    telefono: String,
    mailInfo: String,
    mailSegreteria: String,
    annoFondazione: String,
    pIva: String,
    logo: String,
    categorie: [{ type: mongoose_1.Schema.Types.ObjectId, ref: 'Category' }]
}, { timestamps: true });
ClubsSchema.set('toJSON', {
    virtuals: true,
    transform: (_, ret) => {
        delete ret._id;
        delete ret.__v;
        return ret;
    }
});
ClubsSchema.set('toObject', {
    virtuals: true,
    transform: (_, ret) => {
        delete ret._id;
        delete ret.__v;
        return ret;
    }
});
exports.ClubsModel = (0, mongoose_1.model)('Club', ClubsSchema);
