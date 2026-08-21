import { News } from "./notizie.entity";
import { NewsModel } from "./notizie.model";

export class NewsService {
    async listNews(): Promise<News[]> {
        const notizie = await NewsModel.find()
            .sort({ date: -1 })
            .limit(10);
        return notizie;
    }
}

export default new NewsService();