import { CommonModule } from "@angular/common";
import { AfterViewInit, Component, ElementRef, forwardRef, inject, input, Input, signal, viewChild, ViewChild } from "@angular/core";
import { MatIconModule } from "@angular/material/icon";

import { AbstractControl, NG_VALUE_ACCESSOR } from "@angular/forms";
import { InputTypes } from "../../models/frontend/input-types";



@Component({
    selector: "app-input",
    templateUrl: "./input.component.html",
    imports: [CommonModule, MatIconModule],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => InputComponent),
            multi: true
        }
    ],
    styles: [
        ` .focused{
            @apply outline outline-blue-500 outline-1;
        }
        `
    ]

})

export default class InputComponent {

    title = input<string>('');
    placeholder = input<string>('');
    imgUrl = input<string>('');
    inputTypes = InputTypes;
    inputContainer = viewChild<ElementRef<HTMLDivElement>>('inputContainer');
    value: string = ''
    isPasswordHidden = signal(false);
    control = input<AbstractControl<any, any> | null>();
    error = signal('');

    onFocus() {

        this.inputContainer()?.nativeElement.classList.add('focused')
    }
    onBlur() {
        this.inputContainer()?.nativeElement.classList.remove('focused');
        this.onTouched();
    }

    onPasswordToggle() {
        this.isPasswordHidden.update(value => !value);
    }

    //  Custom Value Accessor

    private onChange: (value: string) => void = () => { };
    private onTouched: () => void = () => { };

    isDisabled: boolean = false;
    writeValue(value: string): void {
        this.value = value || '';
    }

    registerOnChange(fn: (value: string) => void): void {
        this.onChange = fn;
    }

    registerOnTouched(fn: () => void): void {
        this.onTouched = fn;
    }

  
    onInputChange(value: string) {
        const newValue = value;
        this.value = newValue;
        if (this.onChange) {
            this.onChange(newValue);
        }

        if (this.control()) {
            console.log(this.control()?.parent?.controls, 'test');
            const firstError = Object.keys(this.control()?.errors || {})[0];
            if (!firstError) {
                this.error.set('');
                return;
            }
            switch (firstError) {
                case 'minlength': this.error.set(` Камида ${this.control()?.errors?.[firstError]?.requiredLength} та белгидан иборат бўлиши керак`);
                    break;
                case 'maxlength':
                    this.error.set(
                        `Энг кўпи билан ${this.control()?.errors?.[firstError]?.requiredLength} та белгидан иборат бўлиши керак`
                    );
                    break;

                case 'email':
                    this.error.set('Тўғри электрон почта бўлиши керак');
                    break;

                case 'required':
                    this.error.set(`Мажбурий`);
                    break;

                case 'uppercaseLowercase':
                    this.error.set(
                        'Камида битта катта ва битта кичик ҳарфни ўз ичига олиши керак'
                    );
                    break;

                default:
                    this.error.set('Хатолик: ');
            }
        }

    }


}