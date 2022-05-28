import { Category } from "../models/Category";
import { ICategoryRepository } from "./ICategoryRepository";
interface ICreateCategoryDTO {
  name: string;
  description: string;
}

class CategoryRepository implements ICategoryRepository {
  private constructor() {
    this.categories = [];
  }
  private categories: Category[];
  private static INSTANCE: CategoryRepository;

  public static getInstance() {
    if(!CategoryRepository.INSTANCE){
      CategoryRepository.INSTANCE = new CategoryRepository();
    }
    return CategoryRepository.INSTANCE;
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
