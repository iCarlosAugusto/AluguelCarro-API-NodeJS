import { Request, Response } from "express";
import { ImportCategoriesUseCase } from "./ImportCategoriesUseCase";

class ImportCategoriesController {
  private importCategoriesUseCase: ImportCategoriesUseCase;

  constructor(importCategoriesUseCase: ImportCategoriesUseCase) {
    this.importCategoriesUseCase = importCategoriesUseCase;
  }

  handler(request: Request, response: Response) {
    const { file } = request;
    this.importCategoriesUseCase.execute(file);
    response.status(200).json({"success": true});
  }
}

export { ImportCategoriesController };
