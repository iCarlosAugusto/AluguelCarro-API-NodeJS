import { Category } from "../models/Category";

interface ICreateCategoryDTO {
  name: string;
  description: string;
};

class CategoryRepository {
  private categories: Category[];

  create({name, description}: ICreateCategoryDTO){
    const category = new Category();

    Object.assign(category, {
      name,
      description,
      created_at: new Date()
    });

    this.categories.push(category);
  };

  list(){
    return this.categories;
  };

  findByName(name: string){
    const result = this.categories.find((category) => category.name === name);
    return result;
  };

  constructor() {
    this.categories = [];
  };
};

export { CategoryRepository };