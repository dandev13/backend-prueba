import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { CategoriesInterface } from 'src/domain/categories/interfaces';
import { CategoriesEntity } from 'src/domain/categories/entities';
import { RepositoryInterface } from 'src/domain/categories/interfaces';
import { SubCategoriesInterface } from 'src/domain/subcategories/interfaces';

/**
 * @CategoriesRepository los repositorios son clases inyectables a los servicios o interactor los cuales
 * permiten la comunicacion con los frameworks como Mongo, Http, Rabbitmq, es decir son puentes de conexion,
 * por tal motivo estan dentro de la carpeta gateways, cabe aclarar que cada framework debe tener su repositorio
 * unico.
 */
@Injectable()
export class CategoriesRepository implements RepositoryInterface {
    constructor(
        @InjectModel('Categories') private readonly categoriesModel: Model<CategoriesInterface>,
        @InjectModel('SubCategories') private readonly subCategoriesModel: Model<SubCategoriesInterface>,
    ) { }

    async create(categories: CategoriesEntity): Promise<void> {
        try {
            
            const obj = new this.categoriesModel({
                code: categories.code,
                title: categories.title,
                description: categories.description,
            });
            await obj.save();
            if (!obj._id) throw new Error('No fue posible crear la categoria.');
            categories._id = obj._id.toHexString();
        } catch (error) {
            throw new Error(error.message);
        }
    }

    async getCategory(categoriesEntity: CategoriesEntity): Promise<void> {
        try {
            const category = await this.categoriesModel.findOne()
                .where({ code: categoriesEntity.code });
            
            if (!category) throw new Error('Esta categoria no existe.');
            categoriesEntity._id = category._id.toHexString();
            categoriesEntity.title = category.title;
            categoriesEntity.description = category.description;

        } catch (error) {
            throw new Error(error.message);
        }
    }

    async getSubCategories(categoriesEntity: CategoriesEntity): Promise<void> {
        try {
            const subCategories = await this.subCategoriesModel.find()
                .where({ idCategory: categoriesEntity._id });
            
            if (!subCategories) throw new Error(`No hay subcategorias asignadas a ${categoriesEntity.code}`);
            categoriesEntity.subCategories = subCategories;
        } catch (error) {
            throw new Error(error.message);
        }
    }
}