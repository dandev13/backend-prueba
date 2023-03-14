import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  /** Metodo en el cual se instancia el modulo general */
  const app = await NestFactory.create(AppModule);

  /** Metodo para que se castee la informacion entrante del body por la exclusivamente solicitada en el DTO*/
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  );

  /** Inicializacion del escuchador en el puerto 3000 */
  await app.listen(AppModule.port);
}
bootstrap();
