import { HydratedDocument, model, Schema } from "mongoose";
import { Sponsor } from "./sponsor.entity";

const SponsorSchema = new Schema<Sponsor>({
    nome: String,
    logo: String,
}, { timestamps: true });

SponsorSchema.set('toJSON', {
    virtuals: true,
    transform: (_, ret: any) => {
        delete ret._id;
        delete ret.__v;
        return ret;
    }
});

SponsorSchema.set('toObject', {
    virtuals: true,
    transform: (_, ret: any) => {
        delete ret._id;
        delete ret.__v;
        return ret;
    }
});

export type SponsorDocument = HydratedDocument<Sponsor>;

export const SponsorModel = model<Sponsor>('Sponsor', SponsorSchema);