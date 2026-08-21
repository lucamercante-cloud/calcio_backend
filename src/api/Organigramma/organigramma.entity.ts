import { ObjectId, Types } from "mongoose";
import { Category } from "../Category/category.entity";

export interface Organigramma{
    nome: string;
    cognome: string;
    ruoloSocieta: string;
    foto?: string
}