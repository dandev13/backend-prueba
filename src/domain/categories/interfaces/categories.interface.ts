import { SubCategoriesInterface } from "src/domain/subcategories/interfaces";

export interface CategoriesInterface {
  code: string;
  title: string;
  description: string;
  subcategories?: SubCategoriesInterface;
}
