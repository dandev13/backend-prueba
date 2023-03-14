import { Module } from '@nestjs/common';
import { MongoDatabaseProvider } from './mongo-database.provider';

/**
 * @MongoDatabaseModule modulo encargado de inyectar las conexiones de la bd a todo el microservicio
 * las configuraciones las encontramos en los providers que se importar y exportan
 */
@Module({
  imports: [MongoDatabaseProvider],
  exports: [MongoDatabaseProvider],
})
export class MongoDatabaseModule {}
