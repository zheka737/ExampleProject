import { HostBinding, Directive } from "@angular/core";

@Directive({
    selector: 'td'
})
export class PaCellColor {

    @HostBinding("class")
    bgClass: string = "";

    setColor(dark: boolean) {
        this.bgClass = dark ? "bg-dark" : '';
    }
}