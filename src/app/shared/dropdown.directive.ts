import { Directive, HostBinding, HostListener } from "@angular/core";

@Directive({
    selector: '[appdroupdown]',
})
export class DropdounDirective{
    @HostBinding('class.open') isOpen = false;
    @HostListener('click') toggleOpen(){
        this.isOpen = !this.isOpen;
    }
}
