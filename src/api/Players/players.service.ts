import { Types } from "mongoose";
import { Players } from "./players.entity";
import { PlayersModel } from "./players.model";

export class PlayersService {
    async listPlayers(): Promise<Players[]> {
        return await PlayersModel.find().populate('categoria');
    }

    async listPlayersByCategory(categoriaId: string): Promise<Players[]> {
        // Convertiamo la stringa in un vero ObjectId per Atlas
        const objId = new Types.ObjectId(categoriaId);

        return await PlayersModel.find({
            $or: [
                { categoria: objId },
                { categoria: categoriaId }
            ]
        }).populate('categoria');
    }
}

export default new PlayersService();