import { CreateCategoryController } from "./CreateCategoryController";
import { CreateCategoryUseCase } from "./CreateCategoryUseCase";
import { CategoryRepository } from "../../repositories/implementations/CategoryRepository"

const categoryRepository = CategoryRepository.getInstance();
const createCategoryUseCase = new CreateCategoryUseCase(categoryRepository);
const createCategoryController = new CreateCategoryController(createCategoryUseCase);

export { createCategoryController };
