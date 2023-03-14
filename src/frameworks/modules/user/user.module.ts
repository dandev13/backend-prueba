import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { MongooseModule } from '@nestjs/mongoose';
import { CreateUserController, LoginUserController } from 'src/adapters/user/controllers';
import { UserRepository } from 'src/adapters/user/gateways/repositories';
import { BcryptRepository } from 'src/adapters/user/gateways/repositories/bcrypt';
import { JwtRepository } from 'src/adapters/user/gateways/repositories/jwt';
import { CreateUserPresenter, LoginUserPresenter } from 'src/adapters/user/presenters';
import { CreateUserService, LoginUserService } from 'src/application/user/use-cases';
import { UserSchema } from 'src/domain/user/schemas';

/**
 * @UserModule clase que corresponde a los casos de uso del usuario, en esta clase se importan
 * los Schemas de conexion si hablamos de NSQL o las entidades si hablamos de SQL, ademas se inyectan los controladores,
 * servicios, presentadores y respositorios.
 */
@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'User', schema: UserSchema }]),
    // Modulo Async
    JwtModule.registerAsync({
        imports: [ConfigModule],
        inject: [ConfigService],
        /* Funcion que se manda a llamar cuando
        * se intenta registrar de manera async el modulo
        */
        useFactory: () => {
            return {
                signOptions: {
                    expiresIn: '2d'
                }
            }
        }
    }),
  ],
  controllers: [
    CreateUserController,
    LoginUserController,
  ],
  providers: [
    CreateUserService,
    LoginUserService,
    CreateUserPresenter,
    LoginUserPresenter,
    UserRepository,
    BcryptRepository,
    JwtRepository,
  ],
})
export class UserModule {}
