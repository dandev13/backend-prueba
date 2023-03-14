import { Body, Controller, HttpException, HttpStatus, Post } from '@nestjs/common';
import { LoginUserDto } from 'src/application/user/dto';
import { LoginUserService } from 'src/application/user/use-cases';
import { LoginUserPresenter } from '../../presenters';

/**
 * @CreateUserController Los controladores en este framework permiten la entrada proveniente desde la UI,
 * eliminando los router o frameworks como Express o Oak, es importante saber que aca se deben aplicar
 * el tipeado de los DTO a la data entrante como se observa en el metodo create, ademas con los decoradores
 * "controller, Post, Get, Patch, Delete y/o Put" se contruye la ruta, por ejemplo la ruta de este controlador con el
 * metodo create es http://localhost:3000/login-user/
 */
@Controller('login-user')
export class LoginUserController {
  constructor(
    private readonly loginUserService: LoginUserService,
    private readonly loginUserPresenter: LoginUserPresenter,
  ) {}

  @Post('/')
  async create(@Body() body: LoginUserDto) {
    try {
      
      await this.loginUserService.login(body);
      return this.loginUserPresenter.content;
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
