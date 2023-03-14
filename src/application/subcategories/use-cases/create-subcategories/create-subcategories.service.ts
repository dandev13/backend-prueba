import { Injectable } from '@nestjs/common';

import { SubCategoriesRepository } from 'src/adapters/subcategories/gateways/repositories/mongodb';
import { CreateSubCategoriesPresenter } from 'src/adapters/subcategories/presenters';
import { SubCategoriesEntity } from 'src/domain/subcategories/entities';
import { CreateSubCategoriesDto, CreateSubCategoriesOutputDto } from '../../dto';

/**
 * @CreateSubCategoiesService los servicios para nest son los interactor del resto de framework, aqui es donde
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
export class CreateSubCategoriesService {
  /**
   * Contructor para la inyeccion de dependencias
   * @param createSubCategoriesPresenter CreateCategoriesPresenter
   * @param subCategoriesRepository CategoriesRepository
   */
  constructor(
    private readonly subCategoriesRepository: SubCategoriesRepository,
    private readonly createSubCategoriesPresenter: CreateSubCategoriesPresenter,
  ) {}

  /**
   * Metodo publico el cual permite la comunicacion de las dependencias
   * @param CreateSubCategoriesDto CreateSubCategoriesDto
   */
  async create(createSubCategoriesDto: CreateSubCategoriesDto): Promise<void> {
    try {
      const subCategoriesEntity = new SubCategoriesEntity();
      subCategoriesEntity.code = createSubCategoriesDto.code;
      subCategoriesEntity.title = createSubCategoriesDto.title;
      subCategoriesEntity.price = createSubCategoriesDto.price;
      subCategoriesEntity.description = createSubCategoriesDto.description;
      subCategoriesEntity.idCategory = createSubCategoriesDto.idCategory;

      await this.subCategoriesRepository.create(subCategoriesEntity);
      
      this.setCategoriesDto(subCategoriesEntity);
    } catch (error) {
      throw new Error(error.message);
    }
  }

  /**
   * Metodo privado para setear las respuesta mediante del DTO outPut hacia el presenter
   * @param user UserEntity
   */
  private setCategoriesDto(categories: SubCategoriesEntity) {
    const createSubCategoriesOutputDto = new CreateSubCategoriesOutputDto(categories._id);
    this.createSubCategoriesPresenter.response(createSubCategoriesOutputDto);
  }
}
