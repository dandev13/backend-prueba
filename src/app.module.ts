import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongoDatabaseModule } from './frameworks/db/mongo-database/mongo-database.module';
import { UserModule } from './frameworks/modules/user/user.module';

/**
 * @Module decorador encargado de la inyeccion de dependencias de nest, dentro de esta clase
 * solo deben ir modulos globales, los modulos que no lo sean deebn ir dentro de cada caso de uso
 */
@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    MongoDatabaseModule,
    UserModule,
  ],
})
export class AppModule {
  /**
   * Clase inicial del framework, en este espacio se crean los props globales y necesarios para
   * el desarrollo normal de la app, estos props deben venir de "configService", el cual inyecta
   * las variables de entorno o ".env"
   */
  static port: number;
  constructor(private readonly configService: ConfigService) {
    AppModule.port = +this.configService.get('PORT');
  }
}
