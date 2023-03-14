import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CreateUserController } from 'src/adapters/user/controllers';
import { UserRepository } from 'src/adapters/user/gateways/repositories';
import { CreateUserPresenter } from 'src/adapters/user/presenters';
import { CreateUserService } from 'src/application/user/use-cases';
import { UserSchema } from 'src/domain/user/schemas';

/**
 * @UserModule clase que corresponde a los casos de uso del usuario, en esta clase se importan
 * los Schemas de conexion si hablamos de NSQL o las entidades si hablamos de SQL, ademas se inyectan los controladores,
 * servicios, presentadores y respositorios.
 */
@Module({
  imports: [MongooseModule.forFeature([{ name: 'User', schema: UserSchema }])],
  controllers: [CreateUserController],
  providers: [CreateUserService, CreateUserPresenter, UserRepository],
})
export class UserModule {}
