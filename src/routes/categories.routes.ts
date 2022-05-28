import { Router, Request, Response, json } from "express";
import { CategoryRepository } from "../repositories/CategoryRepository";
import { CreateCategoryService } from "../services/CreateCategoryService";

const categoriesRouter = Router();
const categoryRepository = new CategoryRepository();

categoriesRouter.post("/", (req: Request, res: Response) => {
  const { name, description } = req.body;
  const createCategory = new CreateCategoryService(categoryRepository);
  createCategory.execute({ name, description });
  res.status(200).json({ status: "success" });
});

categoriesRouter.get("/", (req: Request, res: Response) => {
  const all = categoryRepository;
  return res.status(200).json(all);
});

export { categoriesRouter };
