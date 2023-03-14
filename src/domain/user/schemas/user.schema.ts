import { Schema } from 'mongoose';

/**
 * @UserSchema Schema o documento el cual permite generar su homologo
 * en la mongo o las base de datos NSQL, es importante saber que la documentacion
 * odficial esta disponible en https://docs.nestjs.com/techniques/mongodb
 */
export const UserSchema = new Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
  token: { type: String },
  softDelete: { type: String },
},
{
    timestamps: true
});
