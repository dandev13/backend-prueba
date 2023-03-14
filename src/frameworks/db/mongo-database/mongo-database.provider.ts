import { DynamicModule } from '@nestjs/common';
import { ConfigService, ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { Enviroment } from 'src/domain/common/enum';

/**
 * @MongoDatabaseProvider propiedad dinamica de tipo DynamicModule que permite asociar
 * las variables de conexion mediante patron de fabricas, es importante saber que las
 * rutas de conexion o cualquier string magico debe venir de las variables de entorno,
 * es importante saber que la documentacion oficial esta en https://docs.nestjs.com/techniques/mongodb
 */
export const MongoDatabaseProvider: DynamicModule = MongooseModule.forRootAsync(
  {
    imports: [ConfigModule],
    useFactory: async (config: ConfigService) => ({
      uri:
        config.get('NODE_ENV') !== Enviroment.Production
          ? config.get('MONGO_DEVELOPMENT')
          : config.get('MONGO_PRODUCTION'),
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }),
    inject: [ConfigService],
  },
);
