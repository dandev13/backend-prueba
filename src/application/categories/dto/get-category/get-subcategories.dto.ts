import { IsEmail, IsNotEmpty, IsString, Matches, MaxLength, MinLength } from 'class-validator';

/**
 * @CreateCategoriesDto los DTO son objetos para el transporte de información proveniente desde
 * la UI hasta el microservicio, es importante saber que los DTO son de solo lectura y debe realizar
 * validaciones "Sintacticas" como por ejemplo el tipo de dato, cada caso de uso debe tener un DTO diferente
 * sin importar que se repitan sus campos, si llega hacer el caso, se de debe crear un interfaz e implementarla de alli
 */
export class GetSubCategoriesDto {
  @IsString()
  @IsNotEmpty({ message: 'El $property es obligatorío.' })
  @MinLength(2, { message: 'El $property debe tener mínimo 2 dígitos.' })
  @MaxLength(10, { message: 'El $property debe tener máximo 10 dígitos.' })
  @Matches(/^[a-zA-Z0-9]+$/, { message: 'El $property no debe contener caracteres especiales, solo alfanúmerico.' })
  readonly code: string;

}
