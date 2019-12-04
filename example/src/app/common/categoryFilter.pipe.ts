import { Pipe } from "@angular/core";
import { Product } from "../model";




@Pipe({
    name: 'filter',
    pure: true
})
export class PaCategoryFilterPipe {
    transform(products: Product[], category: string){
        return category == undefined ? products
            : products.filter(p => p.category == category);
    }
}
