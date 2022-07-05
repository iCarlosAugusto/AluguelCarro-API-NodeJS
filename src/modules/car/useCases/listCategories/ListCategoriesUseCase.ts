import { Category } from "../../entities/Category";
import { ICategoryRepository } from "../../repositories/ICategoryRepository";
import { inject, injectable } from "tsyringe"; 

@injectable()
class ListCategoriesUseCase {
  private categoryRepository: ICategoryRepository;
  constructor(
    @inject("CategoryRepository")
    categoryRepository: ICategoryRepository
  ) {
    this.categoryRepository = categoryRepository;
  }
  async execute(): Promise<Category[]> {
    console.log("ALL FROM LIST CATEGORY USE CASE");

    const all = await this.categoryRepository.list();

    console.log(all);
    return all
  }
}

export { ListCategoriesUseCase };
