import { Router, Request, Response } from "express";
import multer from "multer";
import { createCategoryController } from "../modules/car/useCases/createCategory";
import { listCategoriesController } from "../modules/car/useCases/listCategories";
import { importCategoriesController } from "../modules/car/useCases/importCategories";

const categoriesRouter = Router();

const upload = multer({
  dest: "./tmp"
})

categoriesRouter.post("/", (req: Request, res: Response) => {
  createCategoryController.handler(req, res);
});

categoriesRouter.get("/", (req: Request, res: Response) => {
  listCategoriesController.handler(req, res);
});

categoriesRouter.post("/import", upload.single("file"), (req: Request, res: Response) => {
  importCategoriesController.handler(req, res);
});

export { categoriesRouter };
