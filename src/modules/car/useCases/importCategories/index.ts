import { ImportCategoriesController } from "./ImportCategoriesController";
import { ImportCategoriesUseCase } from "./ImportCategoriesUseCase";
import { CategoryRepository } from "../../repositories/implementations/CategoryRepository";

export default () => {
  const categoryRepository = new CategoryRepository();
  const importCategoriesUseCase = new ImportCategoriesUseCase(
    categoryRepository
  );
  const importCategoriesController = new ImportCategoriesController(
    importCategoriesUseCase
  );

  return importCategoriesController;
};
