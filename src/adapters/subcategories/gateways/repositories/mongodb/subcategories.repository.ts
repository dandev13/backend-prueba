import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { RepositoryInterface } from 'src/domain/subcategories/interfaces';
import { SubCategoriesInterface } from 'src/domain/subcategories/interfaces';
import { SubCategoriesEntity } from 'src/domain/subcategories/entities';

/**
 * @SubCategoriesRepository los repositorios son clases inyectables a los servicios o interactor los cuales
 * permiten la comunicacion con los frameworks como Mongo, Http, Rabbitmq, es decir son puentes de conexion,
 * por tal motivo estan dentro de la carpeta gateways, cabe aclarar que cada framework debe tener su repositorio
 * unico.
 */
@Injectable()
export class SubCategoriesRepository implements RepositoryInterface {
    constructor(
        @InjectModel('SubCategories') private readonly subCategoriesModel: Model<SubCategoriesInterface>,
    ) { }

    async create(subCategories: SubCategoriesEntity): Promise<void> {
        try {
            
            const obj = new this.subCategoriesModel({
                code: subCategories.code,
                title: subCategories.title,
                price: subCategories. price,
                description: subCategories.description,
                idCategory: subCategories.idCategory
            });
            await obj.save();
            if (!obj._id) throw new Error('No fue posible crear la sub categoria.');
            subCategories._id = obj._id.toHexString();
        } catch (error) {
            throw new Error(error.message);
        }
    }

}