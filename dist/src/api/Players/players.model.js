"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlayersModel = void 0;
const mongoose_1 = require("mongoose");
const PlayersSchema = new mongoose_1.Schema({
    nome: String,
    cognome: String,
    dataNascita: Date,
    nazionalità: String,
    ruolo: String,
    foto: String,
    categoria: { type: mongoose_1.Schema.Types.ObjectId, ref: 'Category' }
}, { timestamps: true });
PlayersSchema.set('toJSON', {
    virtuals: true,
    transform: (_, ret) => {
        delete ret._id;
        delete ret.__v;
        return ret;
    }
});
PlayersSchema.set('toObject', {
    virtuals: true,
    transform: (_, ret) => {
        delete ret._id;
        delete ret.__v;
        return ret;
    }
});
exports.PlayersModel = (0, mongoose_1.model)('Players', PlayersSchema);
