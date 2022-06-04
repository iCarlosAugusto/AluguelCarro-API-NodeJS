import { ImportCategoriesController } from "./importCategoriesController";
import { ImportCategoriesUseCase } from "./importCategoriesUseCase";
import { CategoryRepository } from "../../repositories/implementations/CategoryRepository";

const categoryRepository = CategoryRepository.getInstance();
const importCategoriesUseCase = new ImportCategoriesUseCase(categoryRepository);
const importCategoriesController = new ImportCategoriesController(importCategoriesUseCase);

export { importCategoriesController };