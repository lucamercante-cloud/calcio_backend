import { HydratedDocument, model, Schema } from "mongoose";
import { Organigramma } from "./organigramma.entity";

const OrganigrammaSchema = new Schema<Organigramma>({
    nome: String,
    cognome: String,
    ruoloSocieta: String,
    foto: String,
}, { timestamps: true} );

OrganigrammaSchema.set('toJSON', {
    virtuals: true,
    transform: (_, ret: any) => {
        delete ret._id;
        delete ret.__v;
        return ret;
    }
})

OrganigrammaSchema.set('toObject', {
    virtuals: true,
    transform: (_, ret: any) => {
        delete ret._id;
        delete ret.__v;
        return ret;
    }
})

export type OrganigrammaDocument = HydratedDocument<Organigramma>;

export const OrganigrammaModel = model<Organigramma>('Organigramma', OrganigrammaSchema);