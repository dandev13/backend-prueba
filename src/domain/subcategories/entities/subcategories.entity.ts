import { SubCategoriesInterface } from '../interfaces';
export class SubCategoriesEntity implements SubCategoriesInterface {

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

  private _price: string;
  public get price(): string {
    return this._price;
  }
  public set price(v: string) {
    this._price = v;
  }

  private _idCategory: string;
  public get idCategory(): string {
    return this._idCategory;
  }
  public set idCategory(v: string) {
    this._idCategory = v;
  }

  constructor() {
    this.id = '';
    this._code = '';
    this._title = '';
    this._description = '';
    this._price = '';
    this._idCategory = '';
  }
}
