import { Category } from "./category.entity";
import { CategoryModel } from "./category.model";

export class CategoryService {
    async listCategory(): Promise<Category[]> {
        return await CategoryModel.find();
    }
}

export default new CategoryService();