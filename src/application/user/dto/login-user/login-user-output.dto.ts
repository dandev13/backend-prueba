import { UserEntity } from "src/domain/user/entities";

export class LoginUserOutputDto {
  _id: string;
  _token: string;

  constructor(user: UserEntity) {
    this._id = user._id;
    this._token = user.token;
  }
}
