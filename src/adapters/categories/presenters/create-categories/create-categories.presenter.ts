import { Injectable } from '@nestjs/common';

import { CreateCategoriesOutputDto } from 'src/application/categories/dto';
import { PresenterInterface } from 'src/domain/categories/interfaces';

/**
 * @CreateCategoriesPresenter los presentadores o presenters permiten exponer un standar para la respuesta
 * hacia la UI o API que los solicite, ademas pemiten modificar el formato de respuesta si se desea
 * realizando metodos de configuracion globales, lo cual permite se adaptable a cualquier conexion
 */
@Injectable()
export class CreateCategoriesPresenter {
  private _content: PresenterInterface = {
    data: [],
    detail: 'La categoria se ha creado exitosamente',
    severities: 'success',
    summary: 'Categories',
    viewToast: false,
    status: 200
  };
  public get content(): PresenterInterface {
    return this._content;
  }

  response(categories: CreateCategoriesOutputDto): void {
    this._content.data = [];
    this._content.data.push(categories);
  }
}
