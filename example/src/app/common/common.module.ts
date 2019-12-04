import { NgModule } from "@angular/core";
import { PaAddTaxPipe } from "./addTax.pipe";
import { PaAttrDirective } from "./attr.directive";
import { PaCategoryFilterPipe } from "./categoryFilter.pipe";
import { PaCellColor } from "./cellColor.directive";
import { PaCellColorSwitcher } from "./cellColorSwitcher.directive";
import { PaDiscountAmountDirective } from "./discountAmount.directive";
import { PaStructureDirective } from "./structure.directive";
import { PaModel } from "./twoway.directive";
import {
  VALUE_SERVICE,
  PaDisplayValueDirective
} from "./valueDisplay.directive";
import { DiscountService } from "./discount.service";
import { LogService } from "./log.service";
import { ModelModule } from "../model/model.module";
import { PaDiscountPipe } from "./ discount.pipe";
import { PaIteratorDirective } from "./iterator.directive";
@NgModule({
  imports: [ModelModule],
  providers: [
    LogService,
    DiscountService,
    { provide: VALUE_SERVICE, useValue: "Apples" }
  ],
  declarations: [
    PaAddTaxPipe,
    PaAttrDirective,
    PaCategoryFilterPipe,
    PaCellColor,
    PaCellColorSwitcher,
    PaDiscountPipe,
    PaDiscountAmountDirective,
    PaIteratorDirective,
    PaStructureDirective,
    PaModel,
    PaDisplayValueDirective
  ],
  exports: [
    PaAddTaxPipe,
    PaAttrDirective,
    PaCategoryFilterPipe,
    PaCellColor,
    PaCellColorSwitcher,
    PaDiscountPipe,
    PaDiscountAmountDirective,
    PaIteratorDirective,
    PaStructureDirective,
    PaModel,
    PaDisplayValueDirective
  ]
})
export class CommonModule {}
