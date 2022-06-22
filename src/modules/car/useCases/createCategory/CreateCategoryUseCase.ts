import { ICategoryRepository } from "../../repositories/ICategoryRepository";
interface IRequest {
  name: string;
  description: string;
};

class CreateCategoryUseCase {
  constructor(private categoryRepository: ICategoryRepository) {}

  async execute({ name, description }: IRequest): Promise<void> {
    const categoryAlreadyExists = await this.categoryRepository.findByName(name);
    if (categoryAlreadyExists) {
      throw new Error("Erro: CATEGORIA JÁ EXISTE!");
    }

    
    await this.categoryRepository.create({ name, description });
  }
};

export { CreateCategoryUseCase };
