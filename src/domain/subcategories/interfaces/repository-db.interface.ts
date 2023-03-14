import { SubCategoriesEntity } from '../entities';

export interface RepositoryInterface {

  create(categories: SubCategoriesEntity): Promise<void>;
}
