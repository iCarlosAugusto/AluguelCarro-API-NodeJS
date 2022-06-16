import { Request, Response } from "express";
import { CreateCategoryUseCase } from "./CreateCategoryUseCase";

class CreateCategoryController {

  private createCategoryUseCase;

  constructor(createCategoryUseCase: CreateCategoryUseCase) {
    this.createCategoryUseCase = createCategoryUseCase
  };

  async handler(request: Request, response: Response) {
    const { name, description } = request.body;
    await this.createCategoryUseCase.execute({ name, description });
    response.status(200).json({ status: "success" });
  }
}

export { CreateCategoryController };
