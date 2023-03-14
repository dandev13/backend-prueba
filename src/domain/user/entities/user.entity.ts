import { BusinessRulesHelper } from '../helper';
import { UserInterface } from '../interfaces';
export class UserEntity implements UserInterface {
  /**
   * DOC
   * get: Retornan el valor de la propiedad cuando esta se instancia en otras clases o dentro de la misma, si es necesario
   * se puede incluir cualquier validacion pertinente para obtener la respuesta
   * set: Recibe el valor asignado a la propiedad, si no se usan librerias o frameworks aca es el espacio para validar logica de
   * negocio ejemplo: El usuario no puede tener mas de 18 años o el nombre no puede tener mas de 100 caracteres, siguiendo los principios
   * SOLID estas validaciones deben ser importadas desde otra clase dedicada a ser validaciones.
   */

  private id: string;
  public get _id(): string {
    return this.id;
  }
  public set _id(v: string) {
    this.id = v;
  }

  private _name: string;
  public get name(): string {
    return this._name;
  }
  public set name(v: string) {
    if (!BusinessRulesHelper.vNameSize(v))
      throw new Error(
        'El tamaño del nombre debe ser minimo de 5 y maximo de 10',
      );
    this._name = v;
  }

  private _birthday: Date;
  public get birthday(): Date {
    return this._birthday;
  }
  public set birthday(v: Date) {
    this._birthday = v;
  }

  constructor() {
    this.id = '';
    this._name = '';
    this._birthday = new Date();
  }
}
