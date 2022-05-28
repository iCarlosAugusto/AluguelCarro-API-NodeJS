import { Category } from "../../models/Category";
import { ICategoryRepository } from "../../repositories/ICategoryRepository";

class ListCategoriesUseCase {
  private categoryRepository: ICategoryRepository;
  constructor(categoryRepository: ICategoryRepository) {
    this.categoryRepository = categoryRepository;
  }
  execute(): Category[] {
    const all = this.categoryRepository.list();
    return all
  }
}

export { ListCategoriesUseCase };
