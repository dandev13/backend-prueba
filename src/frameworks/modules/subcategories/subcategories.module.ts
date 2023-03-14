import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { CreateSubCategoriesController } from 'src/adapters/subcategories/controllers';
import { SubCategoriesRepository } from 'src/adapters/subcategories/gateways/repositories/mongodb';
import { CreateSubCategoriesPresenter } from 'src/adapters/subcategories/presenters';
import { CreateSubCategoriesService } from 'src/application/subcategories/use-cases';
import { SubCategoriesSchema } from 'src/domain/subcategories/schemas';


/**
 * @SubCategoriesModule clase que corresponde a los casos de uso del usuario, en esta clase se importan
 * los Schemas de conexion si hablamos de NSQL o las entidades si hablamos de SQL, ademas se inyectan los controladores,
 * servicios, presentadores y respositorios.
 */
@Module({
    imports: [
        MongooseModule.forFeature([{ name: 'SubCategories', schema: SubCategoriesSchema }]),
    ],
    controllers: [
        CreateSubCategoriesController,
    ],
    providers: [
        CreateSubCategoriesService,
        SubCategoriesRepository,
        CreateSubCategoriesPresenter,
    ],
    exports: []
})
export class SubCategoriesModule {}
