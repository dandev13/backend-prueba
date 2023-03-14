import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserEntity } from 'src/domain/user/entities';
import { RepositoryInterface, UserInterface } from 'src/domain/user/interfaces';

/**
 * @UserRepository los repositorios son clases inyectables a los servicios o interactor los cuales
 * permiten la comunicacion con los frameworks como Mongo, Http, Rabbitmq, es decir son puentes de conexion,
 * por tal motivo estan dentro de la carpeta gateways, cabe aclarar que cada framework debe tener su repositorio
 * unico.
 */
@Injectable()
export class UserRepository implements RepositoryInterface {
  constructor(
    @InjectModel('User') private readonly userModel: Model<UserInterface>,
  ) {}

  async create(user: UserEntity): Promise<void> {
    try {
      
      const obj = new this.userModel({
        email: user.email,
        password: user.password,
      });
      await obj.save();
      if (!obj._id) throw new Error('No fue posible crear el usuario');
      user._id = obj._id.toHexString();
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async getUser(user: UserEntity): Promise<void> {
    try {
      const _user = await this.userModel.findOne()
        .where({ email: user.email });
      
      if (!_user) throw new Error('El usuario no existe.');
      user._id = _user._id.toHexString();
      user.password = _user.password;
      
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async login(user: UserEntity): Promise<void> {
    try {
      const result = await this.userModel.findByIdAndUpdate(user._id, { token: user.token });
      
      if (!result) throw new Error('El usuario no se pudo autenticar.')
    } catch (error) {
      throw new Error(error.message); 
    }
  }
}
