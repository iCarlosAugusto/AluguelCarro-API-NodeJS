import { CategoryRepository } from "./implementations/CategoryRepository";
import { Category } from "../entities/Category";

interface ICategoryRepository {
  create({ name, description }): Promise<void>;
  list(): Promise<Category[]>;
  findByName(name): Promise<Category>;
}

export { ICategoryRepository };
