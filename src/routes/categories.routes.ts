import { Router, Request, Response, json } from "express";
import { createCategoryController } from "../modules/car/useCases/createCategory";

const categoriesRouter = Router();

categoriesRouter.post("/", (req: Request, res: Response) => {
  createCategoryController.handler(req, res);
});

categoriesRouter.get("/", (req: Request, res: Response) => {
  //const all = categoryRepository;
  //return res.status(200).json(all);
});

export { categoriesRouter };
