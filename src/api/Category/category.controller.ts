import { NextFunction } from "express";
import { TypedRequest } from "../../utils/typed-request";
import categorySrv from './category.service';

export const listCat = async (req: TypedRequest, res: any, next: NextFunction) => {
    try{
        let results = await categorySrv.listCategory();
        res.json(results);
    }
    catch(err){
        next(err);
    }
}