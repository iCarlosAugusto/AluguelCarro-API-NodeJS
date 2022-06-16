import { CreateCategoryController } from "./CreateCategoryController";
import { CreateCategoryUseCase } from "./CreateCategoryUseCase";
import { CategoryRepository } from "../../repositories/implementations/CategoryRepository";

export default (): CreateCategoryController => {
  const categoryRepository = new CategoryRepository();
  const createCategoryUseCase = new CreateCategoryUseCase(categoryRepository);
  const createCategoryController = new CreateCategoryController(createCategoryUseCase);

  return createCategoryController
};
