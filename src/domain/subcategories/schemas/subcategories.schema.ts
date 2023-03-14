import { Schema } from 'mongoose';

/**
 * @SubcatgoriesSchema Schema o documento el cual permite generar su homologo
 * en la mongo o las base de datos NSQL, es importante saber que la documentacion
 * odficial esta disponible en https://docs.nestjs.com/techniques/mongodb
 */
export const SubCategoriesSchema = new Schema({
    code: { type: String, required: true },
    title: { type: String, required: true },
    price: { type: String, required: true },
    description: { type: String, required: true },
    idCategory: { type: String, required: true },
    softDelete: { type: String },
},
{
    timestamps: true
});
