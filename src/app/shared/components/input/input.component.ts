import { Component, ElementRef, forwardRef, Input, signal, ViewChild } from "@angular/core";
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";
import { InputTypes } from "../../models/frontend/input-types";
import { MatIconModule } from "@angular/material/icon";
import { NgIf } from "@angular/common";

@Component({
    selector: 'app-input',
    templateUrl: "./input.component.html",
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => InputComponent),
            multi: true,
        }
    ],
    imports: [MatIconModule, NgIf],
    styles: [
        `
        .focused {
            @apply outline outline-blue-500 outline-1;
        }
        `
    ]
})
export class InputComponent implements ControlValueAccessor {
    @Input() title!: string;  
    @Input() name!: string;
    inputTypes = InputTypes;

    value = ''; // Form control qiymatini saqlash uchun
    isDisabled = false;

    @ViewChild('inputContainer') inputContainer!: ElementRef<HTMLDivElement>;
    isPasswordHidden = signal(false);

    // Callbacks for ControlValueAccessor
    onChange = (value: any) => {};
    onTouched = () => {};

    writeValue(value: any): void {
        this.value = value || '';
    }

    registerOnChange(fn: any): void {
        this.onChange = fn;
    }

    registerOnTouched(fn: any): void {
        this.onTouched = fn;
    }

    setDisabledState(isDisabled: boolean): void {
        this.isDisabled = isDisabled;
    }

    // Input qiymati o'zgarganda chaqiriladi
    onInputChange(event: Event): void {
        const input = event.target as HTMLInputElement;
        this.value = input.value;
        this.onChange(this.value);
    }

    onFocus(): void {
        this.inputContainer.nativeElement.classList.add('focused');
    }

    onBlur(): void {
        this.inputContainer.nativeElement.classList.remove('focused');
        this.onTouched();
    }

    onPasswordToggle(): void {
        this.isPasswordHidden.update((value) => !value);
    }
}
