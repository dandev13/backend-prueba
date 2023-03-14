import { IsString } from 'class-validator';

/**
 * @CreateUserDto los DTO son objetos para el transporte de información proveniente desde
 * la UI hasta el microservicio, es importante saber que los DTO son de solo lectura y debe realizar
 * validaciones "Sintacticas" como por ejemplo el tipo de dato, cada caso de uso debe tener un DTO diferente
 * sin importar que se repitan sus campos, si llega hacer el caso, se de debe crear un interfaz e implementarla de alli
 */
export class CreateUserDto {
  @IsString()
  readonly name: string;

  @IsString()
  readonly birthday: Date;
}
