import { HydratedDocument, model, Schema } from "mongoose";
import { Clubs } from "./club.entity";

const ClubsSchema = new Schema<Clubs>({
    nome: String,
    indirizzoSede: String,
    telefono: String,
    mailInfo: String,
    mailSegreteria: String,
    annoFondazione: String,
    pIva: String,
    logo: String,
    categorie: [{type: Schema.Types.ObjectId, ref: 'Category'}]
}, { timestamps: true} );

ClubsSchema.set('toJSON', {
    virtuals: true,
    transform: (_, ret: any) => {
        delete ret._id;
        delete ret.__v;
        return ret;
    }
})

ClubsSchema.set('toObject', {
    virtuals: true,
    transform: (_, ret: any) => {
        delete ret._id;
        delete ret.__v;
        return ret;
    }
})

export type ClubsDocument = HydratedDocument<Clubs>;

export const ClubsModel = model<Clubs>('Club', ClubsSchema);