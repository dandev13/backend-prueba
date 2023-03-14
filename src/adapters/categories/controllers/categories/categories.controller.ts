import { Body, Controller, Get, HttpException, HttpStatus, Post } from '@nestjs/common';

import { CreateCategoriesDto, GetSubCategoriesDto } from 'src/application/categories/dto';
import { CreateCategoriesService, GetSubCategoriesService } from 'src/application/categories/use-cases';
import { CreateCategoriesPresenter, GetSubCategoriesPresenter } from '../../presenters';

/**
 * @CreateCategoriesController Los controladores en este framework permiten la entrada proveniente desde la UI,
 * eliminando los router o frameworks como Express o Oak, es importante saber que aca se deben aplicar
 * el tipeado de los DTO a la data entrante como se observa en el metodo create, ademas con los decoradores
 * "controller, Post, Get, Patch, Delete y/o Put" se contruye la ruta, por ejemplo la ruta de este controlador con el
 * metodo create es http://localhost:3000/categories/create/
 */
@Controller('categories')
export class CreateCategoriesController {
  constructor(
    private readonly createCategoriesService: CreateCategoriesService,
    private readonly getSubCategoriesService: GetSubCategoriesService,
    private readonly createCategoriesPresenter: CreateCategoriesPresenter,
    private readonly getSubCategoriesPresenter: GetSubCategoriesPresenter,
  ) {}

  @Post('create')
  async create(@Body() body: CreateCategoriesDto) {
    try {
        
        await this.createCategoriesService.create(body);
      return this.createCategoriesPresenter.content;
    } catch (error) {
        throw new HttpException({
        status: HttpStatus.INTERNAL_SERVER_ERROR,
        error: error.message
        }, HttpStatus.INTERNAL_SERVER_ERROR, {
        cause: error
        });
    }
  }

  @Get('getSubCategories')
  async getCategory(@Body() body: GetSubCategoriesDto) {
    try {
      await this.getSubCategoriesService.getSubCategories(body);
      return this.getSubCategoriesPresenter.content;
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
