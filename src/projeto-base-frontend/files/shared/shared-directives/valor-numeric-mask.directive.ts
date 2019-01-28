import { Directive, forwardRef, ElementRef, HostListener } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import * as StringMask from 'string-mask';

@Directive({
    selector: '[appNumerico]',
    providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => ValorNumericoMaskDirective),
        multi: true
    }]
})
export class ValorNumericoMaskDirective implements ControlValueAccessor {

    onTouched: any;
    onChange: any;
    value: any;
    private numericoPonto: StringMask;
    private numericoVirgula: StringMask;

    constructor(private elementRef: ElementRef) {
        this.numericoPonto = new StringMask('.0000');
        this.numericoVirgula = new StringMask(',0000');
    }
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
        const valor = $event.target.value.replace(/[a-z|A-Z|"!@#$%¨&*()/*-+:?><|¹²³£¢¬_{}^`´~;ªº°§]/g, '');
        $event.target.value = valor;
        const valorAposPonto = valor.split('.');
        const valorAposVirgula = valor.split(',');
        if (valorAposPonto[1]) {
            valorAposPonto[1] = this.numericoPonto.apply(valorAposPonto[1]);
            $event.target.value = valorAposPonto[0] + valorAposPonto[1];
            this.onChange($event.target.value);
        } else if (valorAposVirgula[1]) {
            valorAposVirgula[1] = this.numericoVirgula.apply(valorAposVirgula[1]);
            $event.target.value = valorAposVirgula[0] + valorAposVirgula[1];
            this.onChange($event.target.value);
        } else {
            this.onChange($event.target.value);
        }
        return;
    }

}
