import { UserInterface } from '../interfaces';
export class UserEntity implements UserInterface {

  private id: string;
  public get _id(): string {
    return this.id;
  }
  public set _id(v: string) {
    this.id = v;
  }

  private _email: string;
  public get email(): string {
    return this._email;
  }
  public set email(v: string) {
    this._email = v;
  }

  private _password: string;
  public get password(): string {
    return this._password;
  }
  public set password(v: string) {
    this._password = v;
  }

  private _token: string;
  public get token(): string {
    return this._token;
  }
  public set token(v: string) {
    this._token = v;
  }

  constructor() {
    this.id = '';
    this._email = '';
    this._password = '';
    this._token = '';
  }
}
