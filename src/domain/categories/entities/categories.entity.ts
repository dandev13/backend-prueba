import { SubCategoriesInterface } from 'src/domain/subcategories/interfaces';
import { CategoriesInterface } from '../interfaces';
export class CategoriesEntity implements CategoriesInterface {

  private id: string;
  public get _id(): string {
    return this.id;
  }
  public set _id(v: string) {
    this.id = v;
  }

  private _code: string;
  public get code(): string {
    return this._code;
  }
  public set code(v: string) {
    this._code = v;
  }

  private _title: string;
  public get title(): string {
    return this._title;
  }
  public set title(v: string) {
    this._title = v;
  }

  private _description: string;
  public get description(): string {
    return this._description;
  }
  public set description(v: string) {
    this._description = v;
  }

  private _subCategories: SubCategoriesInterface[];
  public get subCategories(): SubCategoriesInterface[] {
    return this._subCategories;
  }
  public set subCategories(v: SubCategoriesInterface[]) {
    this._subCategories = v;
  }

  constructor() {
    this.id = '';
    this._code = '';
    this._title = '';
    this._description = '';
  }
}
