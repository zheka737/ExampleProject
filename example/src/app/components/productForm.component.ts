import { Component, Output, EventEmitter, ViewEncapsulation } from "@angular/core";
import { VALUE_SERVICE } from "../common/valueDisplay.directive";
import { ProductFormGroup } from "../model/form.model";
import { Product, Model } from "../model";


@Component({
    selector: "paProductForm",
    templateUrl: 'productForm.component.html',
    // styleUrls: ['productForm.component.css'],
    // encapsulation: ViewEncapsulation.Emulated,
    providers: [{provide: VALUE_SERVICE, useValue: 'Oranges'}]
})
export class ProductFormComponent {
    form: ProductFormGroup = new ProductFormGroup();
    newProduct: Product = new Product();
    formSubmitted: boolean = false;

    constructor(private model: Model) { }

    // @Output("paNewProduct")
    // newProductEvent = new EventEmitter<Product>();

    submitForm(form: any) {
        this.formSubmitted = true;
        if (form.valid) {
           // this.newProductEvent.emit(this.newProduct);
           this.model.saveProduct(this.newProduct);
            this.newProduct = new Product();
            this.form.reset();
            this.formSubmitted = false;
        }
    }

}
