import { Injectable } from '@nestjs/common';
import { CreateUserOutputDto } from 'src/application/user/dto';
import { PresenterInterface } from 'src/domain/user/interfaces';

/**
 * @CreateUserPresenterlos presentadores o presenters permiten exponer un standar para la respuesta
 * hacia la UI o API que los solicite, ademas pemiten modificar el formato de respuesta si se desea
 * realizando metodos de configuracion globales, lo cual permite se adaptable a cualquier conexion
 */
@Injectable()
export class CreateUserPresenter {
  private _content: PresenterInterface = {
    data: [],
    detail: 'El usuario se ha creado exitosamente',
    severities: 'success',
    summary: 'User',
    viewToast: false,
    status: 200
  };
  public get content(): PresenterInterface {
    return this._content;
  }

  response(user: CreateUserOutputDto): void {
    this._content.data = [];
    this._content.data.push(user);
  }
}
