import { Router, Request, Response, json } from "express";
import { createCategoryController } from "../modules/car/useCases/createCategory";
import { listCategoriesController } from "../modules/car/useCases/listCategories";

const categoriesRouter = Router();

categoriesRouter.post("/", (req: Request, res: Response) => {
  createCategoryController.handler(req, res);
});

categoriesRouter.get("/", (req: Request, res: Response) => {
  listCategoriesController.handler(req, res);
});

export { categoriesRouter };
