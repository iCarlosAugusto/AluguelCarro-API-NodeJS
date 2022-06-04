import { ImportCategoriesController } from "./importCategoriesController";
import { ImportCategoriesUseCase } from "./importCategoriesUseCase";

const importCategoriesUseCase = new ImportCategoriesUseCase();
const importCategoriesController = new ImportCategoriesController(importCategoriesUseCase);

export { importCategoriesController };