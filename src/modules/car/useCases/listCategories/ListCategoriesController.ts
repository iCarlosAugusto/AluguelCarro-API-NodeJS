import { Request, Response } from "express";
import { ListCategoriesUseCase } from "./ListCategoriesUseCase";

class ListCategoriesController {
  private listCategoriesUseCase: ListCategoriesUseCase;
  constructor(listCategoriesCase: ListCategoriesUseCase) {
    this.listCategoriesUseCase = listCategoriesCase;
  }

  handler(request: Request, response: Response) {
    const all = this.listCategoriesUseCase.execute();
  
    return response.json(all);
  }
}

export { ListCategoriesController };
