import { ICategoryRepository } from "../../repositories/ICategoryRepository";
import { inject, injectable } from "tsyringe";
interface IRequest {
  name: string;
  description: string;
};

@injectable()
class CreateCategoryUseCase {
  constructor(
    @inject("CategoryRepository")
    private categoryRepository: ICategoryRepository
  ) {}

  async execute({ name, description }: IRequest): Promise<void> {
    const categoryAlreadyExists = await this.categoryRepository.findByName(name);
    if (categoryAlreadyExists) {
      throw new Error("Erro: CATEGORIA JÁ EXISTE!");
    }

    
    await this.categoryRepository.create({ name, description });
  }
};

export { CreateCategoryUseCase };
