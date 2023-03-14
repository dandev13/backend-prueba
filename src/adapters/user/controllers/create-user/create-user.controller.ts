import { Body, Controller, HttpException, HttpStatus, Post } from '@nestjs/common';
import { CreateUserDto } from 'src/application/user/dto';
import { CreateUserService } from 'src/application/user/use-cases/create-user/create-user.service';
import { CreateUserPresenter } from '../../presenters';

/**
 * @CreateUserController Los controladores en este framework permiten la entrada proveniente desde la UI,
 * eliminando los router o frameworks como Express o Oak, es importante saber que aca se deben aplicar
 * el tipeado de los DTO a la data entrante como se observa en el metodo create, ademas con los decoradores
 * "controller, Post, Get, Patch, Delete y/o Put" se contruye la ruta, por ejemplo la ruta de este controlador con el
 * metodo create es http://localhost:3000/create-user/
 */
@Controller('create-user')
export class CreateUserController {
  constructor(
    private readonly createUserService: CreateUserService,
    private readonly createUserPresenter: CreateUserPresenter,
  ) {}

  @Post('/')
  async create(@Body() body: CreateUserDto) {
    try {
      await this.createUserService.create(body);
      return this.createUserPresenter.content;
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
