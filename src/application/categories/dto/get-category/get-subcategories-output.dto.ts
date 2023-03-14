import { CategoriesEntity } from "src/domain/categories/entities";
import { SubCategoriesInterface } from "src/domain/subcategories/interfaces";

export class GetSubCategoriesOutputDto {
  _id: string;
  _code: string;
  _title: string;
  _description: string;
  _subCategories: SubCategoriesInterface[];

  constructor(categories: CategoriesEntity) {
    this._id = categories._id;
    this._code = categories.code;
    this._title = categories.title;
    this._description = categories.description;
    this._subCategories = categories.subCategories;
  }
}
