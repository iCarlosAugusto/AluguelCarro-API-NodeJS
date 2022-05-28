import { Category } from "../models/Category";
import { ICategoryRepository } from "./ICategoryRepository";
interface ICreateCategoryDTO {
  name: string;
  description: string;
}

class CategoryRepository implements ICategoryRepository {
  private categories: Category[];
  
  constructor() {
    this.categories = [];
  }

  create({ name, description }: ICreateCategoryDTO): void {
    const category = new Category();

    Object.assign(category, {
      name,
      description,
      created_at: new Date(),
    });

    this.categories.push(category);
  }

  list() {
    return this.categories;
  }

  findByName(name: string) {
    const result = this.categories.find((category) => category.name === name);
    return result;
  }
}

export { CategoryRepository };
