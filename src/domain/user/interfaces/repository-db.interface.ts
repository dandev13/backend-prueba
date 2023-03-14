import { UserEntity } from '../entities';

export interface RepositoryInterface {

  create(user: UserEntity): Promise<void>;
}
