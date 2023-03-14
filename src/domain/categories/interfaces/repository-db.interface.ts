import { CategoriesEntity } from '../entities';

export interface RepositoryInterface {

  create(categories: CategoriesEntity): Promise<void>;
}
