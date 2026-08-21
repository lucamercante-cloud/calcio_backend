import { Types } from "mongoose";
import { Category } from "../Category/category.entity";

export interface Clubs {
    nome: string;
    indirizzoSede: string;
    telefono: string;
    mailInfo: string;
    mailSegreteria: string;
    annoFondazione: string;
    pIva: string | null;
    logo?: string;
    categorie: Types.ObjectId[];
}