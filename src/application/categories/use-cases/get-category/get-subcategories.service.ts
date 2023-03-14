import { Injectable } from "@nestjs/common";
import { CategoriesRepository } from "src/adapters/categories/gateways/repositories/mongodb";
import { GetSubCategoriesPresenter } from "src/adapters/categories/presenters";
import { SubCategoriesRepository } from "src/adapters/subcategories/gateways/repositories/mongodb";
import { CategoriesEntity } from "src/domain/categories/entities";
import { GetSubCategoriesDto, GetSubCategoriesOutputDto } from "../../dto";



@Injectable()
export class GetSubCategoriesService {
    constructor(
        private readonly categoriesRepository: CategoriesRepository,
        private readonly getSubCategoriesPresenter: GetSubCategoriesPresenter,
    ) { }
    
    async getSubCategories(getSubCategoriesDto: GetSubCategoriesDto): Promise<void> {
        try {
            const category = new CategoriesEntity();
            category.code = getSubCategoriesDto.code;

            await this.categoriesRepository.getCategory(category);
            await this.categoriesRepository.getSubCategories(category);

            this.setCategoriesDto(category);

        } catch (error) {
            throw new Error(error.message);
        }
    }

    private setCategoriesDto(categories: CategoriesEntity) {
        const getSubCategoriesOutputDto = new GetSubCategoriesOutputDto(categories);
        this.getSubCategoriesPresenter.response(getSubCategoriesOutputDto);
    }
}