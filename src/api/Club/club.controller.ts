import { NextFunction } from "express";
import { TypedRequest } from "../../utils/typed-request";
import clubSrv from './club.service'

export const listCl = async (req: TypedRequest, res: any, next: NextFunction) => {
    try{
        let results = await clubSrv.listClubs();
        res.json(results);
    }
    catch(err){
        next(err);
    }
}