import { Sponsor } from "./sponsor.entity";
import { SponsorModel } from "./sponsor.model";

export class SponsorService {
    async listSponsor(): Promise<Sponsor[]> {
        return await SponsorModel.find();
    }
}

export default new SponsorService();