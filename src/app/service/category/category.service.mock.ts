
import { of } from "rxjs";
import { CategoryService } from "src/app/service/category/category.service";
import categories from "../../../assets/mock/categories.json";

export class MockCategoryService extends CategoryService {

    getAll (){
        return of(categories);
    }

}

