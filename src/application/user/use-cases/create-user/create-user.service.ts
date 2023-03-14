import { Injectable } from '@nestjs/common';
import { UserRepository } from 'src/adapters/user/gateways/repositories';
import { CreateUserPresenter } from 'src/adapters/user/presenters';
import { UserEntity } from 'src/domain/user/entities';
import { CreateUserDto, CreateUserOutputDto } from '../../dto';

/**
 * @CreateUserService los servicios para nest son los interactor del resto de framework, aqui es donde
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
export class CreateUserService {
  /**
   * Contructor para la inyeccion de dependencias
   * @param createUserPresenter CreateUserPresenter
   * @param userRepository UserRepository
   */
  constructor(
    private readonly createUserPresenter: CreateUserPresenter,
    private readonly userRepository: UserRepository,
  ) {}

  /**
   * Metodo publico el cual permite la comunicacion de las dependencias
   * @param createUserDto CreateUserDto
   */
  async create(createUserDto: CreateUserDto): Promise<void> {
    try {
      const user = new UserEntity();
      user.name = createUserDto.name;
      user.birthday = createUserDto.birthday;
      await this.userRepository.create(user);
      this.setUserDto(user);
    } catch (error) {
      throw new Error(error.message);
    }
  }

  /**
   * Metodo privado para setear las respuesta mediante del DTO outPut hacia el presenter
   * @param user UserEntity
   */
  private setUserDto(user: UserEntity) {
    const createUserDtoOutput = new CreateUserOutputDto(user._id);
    this.createUserPresenter.response(createUserDtoOutput);
  }
}
