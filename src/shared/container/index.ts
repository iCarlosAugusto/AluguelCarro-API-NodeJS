import { container } from "tsyringe";
import { ICategoryRepository } from "../../modules/car/repositories/ICategoryRepository";
import { CategoryRepository } from "../../modules/car/repositories/implementations/CategoryRepository";

container.registerSingleton<ICategoryRepository>(
  "CategoryRepository",
  CategoryRepository
)

