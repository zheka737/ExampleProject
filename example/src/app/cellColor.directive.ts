import { HostBinding, Directive } from "@angular/core";

@Directive({
    selector: 'td[paApplyColor]'
})
export class PaCellColor {

    @HostBinding("class")
    bgClass: string = "";

    setColor(dark: boolean) {
        this.bgClass = dark ? "bg-dark" : '';
    }
}