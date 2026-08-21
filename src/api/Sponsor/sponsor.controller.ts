import { NextFunction } from "express";
import { TypedRequest } from "../../utils/typed-request";
import sponsorSrv from './sponsor.service'

export const listSp = async (req: TypedRequest, res: any, next: NextFunction) => {
    try {
        let results = await sponsorSrv.listSponsor();
        res.json(results);
    }
    catch (err) {
        next(err);
    }
}