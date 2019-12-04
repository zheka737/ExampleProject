import { Component, Input, ViewChildren, QueryList } from "@angular/core";
import { LogService } from "../common/log.service";
import { Model } from "../model/repository.model";
import { Product } from "../model";

@Component({
    selector: "paProductTable",
    templateUrl: "productTable.component.html",
    providers: [LogService]
})
export class ProductTableComponent {
    //discounter: DiscountService = new DiscountService();

    constructor(private dataModel: Model) { }


    // @Input("model")
    // dataModel: Model;

    getProduct(key: number): Product {
        return this.dataModel.getProduct(key);
    }

    getProducts(): Product[] {
        return this.dataModel.getProducts();
    }

    deleteProduct(key: number) {
        this.dataModel.deleteProduct(key);
    }

    dateObject: Date = new Date(2020, 1, 20);
    dateString: string = "2020-02-20T00:00:00.000Z";
    dateNumber: number = 1582156800000;

}
