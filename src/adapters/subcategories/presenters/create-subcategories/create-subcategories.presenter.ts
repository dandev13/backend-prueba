import { Injectable } from '@nestjs/common';

import { CreateSubCategoriesOutputDto } from 'src/application/subcategories/dto';
import { PresenterInterface } from 'src/domain/subcategories/interfaces';

/**
 * @CreateSubCategoriesPresenter los presentadores o presenters permiten exponer un standar para la respuesta
 * hacia la UI o API que los solicite, ademas pemiten modificar el formato de respuesta si se desea
 * realizando metodos de configuracion globales, lo cual permite se adaptable a cualquier conexion
 */
@Injectable()
export class CreateSubCategoriesPresenter {
  private _content: PresenterInterface = {
    data: [],
    detail: 'La sub categoria se ha creado exitosamente',
    severities: 'success',
    summary: 'SubCategories',
    viewToast: false,
    status: 200
  };
  public get content(): PresenterInterface {
    return this._content;
  }

  response(subCategories: CreateSubCategoriesOutputDto): void {
    this._content.data = [];
    this._content.data.push(subCategories);
  }
}
