import { NextFunction } from "express";
import { TypedRequest } from "../../utils/typed-request";
import organigrammaSrv from "./organigramma.service"

export const listOrg = async (req: TypedRequest, res: any, next: NextFunction) => {
    try{
        let results = await organigrammaSrv.listaOrganigramma();
        res.json(results);
    }
    catch(err){
        next(err);
    }
}