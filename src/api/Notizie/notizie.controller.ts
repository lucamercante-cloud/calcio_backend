import { NextFunction } from "express";
import { TypedRequest } from "../../utils/typed-request";
import newsSrv from './notizie.service'

export const listNw = async (req: TypedRequest, res: any, next: NextFunction) => {
    try {
        let results = await newsSrv.listNews();
        res.json(results);
    }
    catch (err) {
        next(err);
    }
}