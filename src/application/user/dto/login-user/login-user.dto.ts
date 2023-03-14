import { IsEmail, IsNotEmpty, IsString, Matches, MaxLength, MinLength } from 'class-validator';

/**
 * @LoginUserDto los DTO son objetos para el transporte de información proveniente desde
 * la UI hasta el microservicio, es importante saber que los DTO son de solo lectura y debe realizar
 * validaciones "Sintacticas" como por ejemplo el tipo de dato, cada caso de uso debe tener un DTO diferente
 * sin importar que se repitan sus campos, si llega hacer el caso, se de debe crear un interfaz e implementarla de alli
 */
export class LoginUserDto {
  @IsString()
  @IsEmail({}, { message: 'El $property que estas enviando debe ser de tipo email.'})
  @IsNotEmpty({ message: 'El $property es obligatorío.' })
  readonly email: string;

  @IsString()
  @IsNotEmpty({ message: 'La contraseña es obligatoría.' })
  @MinLength(8, { message: 'La contraseña debe tener mínimo 9 dígitos.' })
  @MaxLength(16, { message: 'La contraseña debe tener máximo 16 dígitos.' })
  @Matches(/^[a-zA-Z0-9*/$%&+-]*$/, { message: 'La contraseña solo permite caracteres alfanuméricos y caracteres permitidos (*/+-$%&).' })
  readonly password: string;
}
