import { Router, Request, Response } from "express";
import multer from "multer";
import { ListCategoriesController } from "../modules/car/useCases/listCategories/ListCategoriesController";
import importCategoriesController from "../modules/car/useCases/importCategories";
import { CreateCategoryController } from "../modules/car/useCases/createCategory/CreateCategoryController";

const categoriesRouter = Router();

const upload = multer({
  dest: "./tmp"
})

const createCategoryController = new CreateCategoryController();
const listCategoriesController = new ListCategoriesController();

categoriesRouter.post("/", (req: Request, res: Response) => {
  createCategoryController.handler(req, res);
});

categoriesRouter.get("/", (req: Request, res: Response) => {
  listCategoriesController.handler(req, res);
});

categoriesRouter.post("/import", upload.single("file"), (req: Request, res: Response) => {
  importCategoriesController().handler(req, res);
});

export { categoriesRouter };
