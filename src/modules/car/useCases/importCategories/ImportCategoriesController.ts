import { Request, Response } from "express";
import { ImportCategoriesUseCase } from "./importCategoriesUseCase";

class ImportCategoriesController {
  private importCategoriesUseCase: ImportCategoriesUseCase;

  constructor(importCategoriesUseCase: ImportCategoriesUseCase) {
    this.importCategoriesUseCase = importCategoriesUseCase;
  }

  handler(request: Request, response: Response) {
    this.importCategoriesUseCase.execute("TESTE");
    response.status(200).json({"success": true});
  }
}

export { ImportCategoriesController };
