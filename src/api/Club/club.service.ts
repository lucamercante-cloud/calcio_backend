import { Clubs } from "./club.entity";
import { ClubsModel } from "./club.model";

export class ClubService {
    async listClubs(): Promise<Clubs | null>{
        return await ClubsModel.findOne().populate('categorie');
    }
}

export default new ClubService();