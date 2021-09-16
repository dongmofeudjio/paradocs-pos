import { Classification } from "src/app/entity/classification";

/**
 * @author : Dongmo Feudjio
 * 
 * @description
 * category model
 *
 * **/
export interface Category extends Classification {
    selected ?: boolean
}