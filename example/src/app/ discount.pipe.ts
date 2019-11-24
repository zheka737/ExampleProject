import { DiscountService } from "./discount.service";
import { Pipe } from "@angular/core";

@Pipe({
    name: "discount",
    pure: false
})
export class PaDiscountPipe {
    constructor(private discount: DiscountService) {}

    transform(price: number): number {
        return this.discount.applyDiscount(price);
    }
}