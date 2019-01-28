import { Directive, forwardRef, ElementRef, HostListener } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Directive({
    selector: '[appRemoveEspaco]',
    providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => RemoveEspacoDirective),
        multi: true
    }]
})
export class RemoveEspacoDirective implements ControlValueAccessor {

    onTouched: any;
    onChange: any;
    value: any;

    constructor(private elementRef: ElementRef) { }

    writeValue(value: any): void {
        this.elementRef.nativeElement.value = value;
        this.value = value;
    }

    registerOnChange(fn: any): void {
        this.onChange = fn;
    }

    registerOnTouched(fn: any): void {
        this.onTouched = fn;
    }

    setDisabledState?(isDisabled: boolean): void {
        isDisabled = isDisabled;
    }

    @HostListener('keyup', ['$event'])
    onKeyup($event: any) {
        const valor = $event.target.value.replace(/\s|["!@#$%¨&*()/*-+:?><|¹²³£¢¬{}^`´~;ªº°§.,-]/g, '');
        $event.target.value = valor;
        this.onChange($event.target.value);
        return;
    }

}
