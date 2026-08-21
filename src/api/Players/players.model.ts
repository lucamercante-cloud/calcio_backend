import { HydratedDocument, model, Schema } from "mongoose";
import { Players } from "./players.entity";

const PlayersSchema = new Schema<Players>({
    nome: String,
    cognome: String,
    dataNascita: Date,
    nazionalità: String,
    ruolo: String,
    foto: String,
    categoria: {type: Schema.Types.ObjectId, ref: 'Category'}
}, { timestamps: true} );

PlayersSchema.set('toJSON', {
    virtuals: true,
    transform: (_, ret: any) => {
        delete ret._id;
        delete ret.__v;
        return ret;
    }
})

PlayersSchema.set('toObject', {
    virtuals: true,
    transform: (_, ret: any) => {
        delete ret._id;
        delete ret.__v;
        return ret;
    }
})

export type PlayersDocument = HydratedDocument<Players>;

export const PlayersModel = model<Players>('Players', PlayersSchema);