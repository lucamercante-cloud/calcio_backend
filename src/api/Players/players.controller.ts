import { NextFunction } from "express";
import { TypedRequest } from "../../utils/typed-request";
import playestSrv from './players.service'

export const listPl = async (req: TypedRequest, res: any, next: NextFunction) => {
    try{
        let results = await playestSrv.listPlayers();
        res.json(results);
    }
    catch(err){
        next(err);
    }
}

export const listPlByCategory = async (req: TypedRequest, res: any, next: NextFunction) => {
    try{
        const categoria = req.params.categoria as string;
        let results = await playestSrv.listPlayersByCategory(categoria);
        res.json(results);
    }
    catch(err){
        next(err);
    }
}