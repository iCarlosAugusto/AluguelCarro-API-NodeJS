import { ListCategoriesController } from "./ListCategoriesController";
import { ListCategoriesUseCase } from "./ListCategoriesUseCase";
import { CategoryRepository } from "../../repositories/implementations/CategoryRepository";

export default () => {
  const categoryRepository = new CategoryRepository();
  const listCategoriesUseCase = new ListCategoriesUseCase(categoryRepository);
  const listCategoriesController = new ListCategoriesController(listCategoriesUseCase);

  return listCategoriesController;
};
