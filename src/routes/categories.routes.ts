import { Router, Request, Response, json } from "express";
import { v4 as uuidv4 } from "uuid";
import { Category } from "../models/Category";
import { CategoryRepository } from "../repositories/CategoryRepository";

const categoriesRouter = Router();
const categoryRepository = new CategoryRepository();

categoriesRouter.post("/", (req: Request, res: Response) => {
  const { name, description } = req.body;

  const categoryAlreadyExists = categoryRepository.findByName(name);
  if(categoryAlreadyExists){
    return res.status(400).json({"Erro": "Category already exists"});
  };
  categoryRepository.create({name, description});

  res.status(200).json({"status": "success"});
});

categoriesRouter.get("/", (req: Request, res: Response) => {
  const all = categoryRepository;
  return res.status(200).json(all);
  
});

export { categoriesRouter };