import { Players } from "./players.entity";
import { PlayersModel } from "./players.model";

export class PlayersService {
    async listPlayers(): Promise<Players[]> {
        return await PlayersModel.find().populate('categoria');
    }

    async listPlayersByCategory(categoriaId: string): Promise<Players[]> {
        return await PlayersModel.find({ categoria: categoriaId }).populate('categoria');
    }
}

export default new PlayersService();