import { Request, Response } from "express";
import { CreateCategoryUseCase } from "./CreateCategoryUseCase";
import { container } from "tsyringe";

class CreateCategoryController {

  private createCategoryUseCase;


  async handler(request: Request, response: Response) {
    const { name, description } = request.body;

    const createCategoryUseCase = container.resolve(CreateCategoryUseCase);
    await createCategoryUseCase.execute({ name, description });
    response.status(200).json({ status: "success" });
  }
}

export { CreateCategoryController };
