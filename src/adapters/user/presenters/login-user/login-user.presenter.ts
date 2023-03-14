import { Injectable } from '@nestjs/common';
import { LoginUserOutputDto } from 'src/application/user/dto';
import { PresenterInterface } from 'src/domain/user/interfaces';

/**
 * @LoginUserPresenterlos presentadores o presenters permiten exponer un standar para la respuesta
 * hacia la UI o API que los solicite, ademas pemiten modificar el formato de respuesta si se desea
 * realizando metodos de configuracion globales, lo cual permite se adaptable a cualquier conexion
 */
@Injectable()
export class LoginUserPresenter {
  private _content: PresenterInterface = {
    data: [],
    detail: 'El usuario ha iniciado sesión exitosamente',
    severities: 'success',
    summary: 'User',
    viewToast: false,
    status: 200
  };
  public get content(): PresenterInterface {
    return this._content;
  }

  response(user: LoginUserOutputDto): void {
    this._content.data = [];
    this._content.data.push(user);
  }
}
