import { CategoryRepository } from "./CategoryRepository";
import { Category } from "../models/Category";

interface ICategoryRepository {
  create({name, description}): void;
  list(): Category[];
  findByName(name): Category;
};

export { ICategoryRepository };