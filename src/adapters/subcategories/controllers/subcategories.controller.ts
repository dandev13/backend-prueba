import { Body, Controller, HttpException, HttpStatus, Post } from '@nestjs/common';

import { CreateSubCategoriesDto } from 'src/application/subcategories/dto';
import { CreateSubCategoriesService } from 'src/application/subcategories/use-cases';
import { CreateSubCategoriesPresenter } from '../presenters';

/**
 * @CreateSubCategoriesController Los controladores en este framework permiten la entrada proveniente desde la UI,
 * eliminando los router o frameworks como Express o Oak, es importante saber que aca se deben aplicar
 * el tipeado de los DTO a la data entrante como se observa en el metodo create, ademas con los decoradores
 * "controller, Post, Get, Patch, Delete y/o Put" se contruye la ruta, por ejemplo la ruta de este controlador con el
 * metodo create es http://localhost:3000/create-subcategories/
 */
@Controller('create-subcategories')
export class CreateSubCategoriesController {
  constructor(
    private readonly createSubCategoriesService: CreateSubCategoriesService,
    private readonly createSubCategoriesPresenter: CreateSubCategoriesPresenter,
  ) {}

  @Post('/')
  async create(@Body() body: CreateSubCategoriesDto) {
    try {
        
        await this.createSubCategoriesService.create(body);
      return this.createSubCategoriesPresenter.content;
    } catch (error) {
        throw new HttpException({
        status: HttpStatus.INTERNAL_SERVER_ERROR,
        error: error.message
        }, HttpStatus.INTERNAL_SERVER_ERROR, {
        cause: error
        });
    }
  }
}
