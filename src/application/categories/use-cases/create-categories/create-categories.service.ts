import { Injectable } from '@nestjs/common';
import { CategoriesRepository } from 'src/adapters/categories/gateways/repositories/mongodb';
import { CreateCategoriesPresenter } from 'src/adapters/categories/presenters';
import { CategoriesEntity } from 'src/domain/categories/entities';

import { CreateCategoriesDto, CreateCategoriesOutputDto } from '../../dto';

/**
 * @CreateCategoiesService los servicios para nest son los interactor del resto de framework, aqui es donde
 * se reciben los DTO enviados como parametros desde el controlador y con esta data se crean las entidades, en los services
 * se control el Work flow o flujo de trabajo de la aplicación o software, es decir la logica de negocio macro de esta.
 * Los servicios o interactor tienen que tener dentro de sus inyeccion puesto que no retornan nada si no siguen el flujo de trabajo,
 * el retorno se hace por el puerto salida que son los mismos presentadores.
 * @Entities clases que permiten validar la logica de negocio de cada campo antes de almacenar en la BD y esto se da
 * porque la arquitectura que ofrece nest y la implementada "Clean Arquitecture", me permite cambiar la base de datos sin problemas,
 * si dejamos la logica de negocio solo a la base de datos y es cambiable, el desarrollo aumenta cada vez que se quiera realizar
 * dicha proeza, porque tocaria incluir y garantizar que la misma logica de negocio de la base de datos anterior se aplique en la nueva,
 * lo cual es un riesgo
 */
@Injectable()
export class CreateCategoriesService {
  /**
   * Contructor para la inyeccion de dependencias
   * @param createCategoriesPresenter CreateCategoriesPresenter
   * @param categoriesRepository CategoriesRepository
   */
  constructor(
    private readonly categoriesRepository: CategoriesRepository,
    private readonly createCategoriesPresenter: CreateCategoriesPresenter,
  ) {}

  /**
   * Metodo publico el cual permite la comunicacion de las dependencias
   * @param CreateCategoriesDto CreateCategoriesDto
   */
  async create(createCategoriesDto: CreateCategoriesDto): Promise<void> {
    try {
      const categoriesEntity = new CategoriesEntity();
      categoriesEntity.code = createCategoriesDto.code;
      categoriesEntity.title = createCategoriesDto.title;
      categoriesEntity.description = createCategoriesDto.description;

      await this.categoriesRepository.create(categoriesEntity);
      
      this.setCategoriesDto(categoriesEntity);
    } catch (error) {
      throw new Error(error.message);
    }
  }

  /**
   * Metodo privado para setear las respuesta mediante del DTO outPut hacia el presenter
   * @param user UserEntity
   */
  private setCategoriesDto(categories: CategoriesEntity) {
    const createCategoriesOutputDto = new CreateCategoriesOutputDto(categories._id);
    this.createCategoriesPresenter.response(createCategoriesOutputDto);
  }
}
