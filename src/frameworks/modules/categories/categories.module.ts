import { Module } from '@nestjs/common';

import { MongooseModule } from '@nestjs/mongoose';
import { CreateCategoriesController } from 'src/adapters/categories/controllers';
import { CategoriesRepository } from 'src/adapters/categories/gateways/repositories/mongodb';
import { CreateCategoriesPresenter, GetSubCategoriesPresenter } from 'src/adapters/categories/presenters';
import { CreateCategoriesService, GetSubCategoriesService } from 'src/application/categories/use-cases';
import { CategoriesSchema } from 'src/domain/categories/schemas';
import { SubCategoriesSchema } from 'src/domain/subcategories/schemas';


/**
 * @CategoriesModule clase que corresponde a los casos de uso del usuario, en esta clase se importan
 * los Schemas de conexion si hablamos de NSQL o las entidades si hablamos de SQL, ademas se inyectan los controladores,
 * servicios, presentadores y respositorios.
 */
@Module({
    imports: [
        MongooseModule.forFeature([{ name: 'Categories', schema: CategoriesSchema }]),
        MongooseModule.forFeature([{ name: 'SubCategories', schema: SubCategoriesSchema }]),
    ],
    controllers: [
        CreateCategoriesController,
    ],
    providers: [
        CreateCategoriesService,
        GetSubCategoriesService,
        CategoriesRepository,
        CreateCategoriesPresenter,
        GetSubCategoriesPresenter,
    ],
})
export class CategoriesModule {}
