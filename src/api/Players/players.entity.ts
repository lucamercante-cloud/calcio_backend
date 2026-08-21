import { ObjectId, Types } from "mongoose";
import { Category } from "../Category/category.entity";

export interface Players{
    nome: string;
    cognome: string;
    dataNascita: Date;
    nazionalità: string;
    ruolo: string;
    foto?: string,
    categoria: Types.ObjectId;
}