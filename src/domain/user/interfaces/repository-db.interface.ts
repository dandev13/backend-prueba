import { UserEntity } from '../entities';

export interface RepositoryInterface {
  /**
   * Metodo para crear el usuario
   * @param user User
   */
  create(user: UserEntity): Promise<void>;
}
