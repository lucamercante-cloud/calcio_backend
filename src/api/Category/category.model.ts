import { HydratedDocument, model, Schema } from "mongoose";
import { Category } from "./category.entity";

const CategorySchema = new Schema<Category>({
    nome: String,
    annata: String,
    campionato: String
}, { timestamps: true} );

CategorySchema.set('toJSON', {
    virtuals: true,
    transform: (_, ret: any) => {
        delete ret._id;
        delete ret.__v;
        return ret;
    }
})

CategorySchema.set('toObject', {
    virtuals: true,
    transform: (_, ret: any) => {
        delete ret._id;
        delete ret.__v;
        return ret;
    }
})

export type CategoryDocument = HydratedDocument<Category>;

export const CategoryModel = model<Category>('Category', CategorySchema);