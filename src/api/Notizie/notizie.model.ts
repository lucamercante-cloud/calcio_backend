import { HydratedDocument, model, Schema } from "mongoose";
import { News } from "./notizie.entity";

const NewsSchema = new Schema<News>({
    titolo: String,
    desc: String,
    img: String,
    date: { type: Date, default: Date.now }
}, { timestamps: true });

NewsSchema.set('toJSON', {
    virtuals: true,
    transform: (_, ret: any) => {
        delete ret._id;
        delete ret.__v;
        delete ret.createdAt;
        delete ret.updatedAt;
        return ret;
    }
});

NewsSchema.set('toObject', {
    virtuals: true,
    transform: (_, ret: any) => {
        delete ret._id;
        delete ret.__v;
        delete ret.createdAt;
        delete ret.updatedAt;
        return ret;
    }
});

export type NewsDocument = HydratedDocument<News>;
export const NewsModel = model<News>('News', NewsSchema);