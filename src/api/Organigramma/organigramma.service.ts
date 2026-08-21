import { Organigramma } from "./organigramma.entity";
import { OrganigrammaModel } from "./organigramma.model";


export class OrganigrammaService {
    async listaOrganigramma(): Promise<Organigramma[]> {
        return await OrganigrammaModel.find();
    }
}

export default new OrganigrammaService();