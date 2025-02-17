import { CommonModule } from "@angular/common";
import { Component, ElementRef, forwardRef, Input, ViewChild } from "@angular/core";
import { MatIconModule } from "@angular/material/icon";
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from "@angular/forms";
import { InputTypes } from "../../models/frontend/input-types";

@Component({
    selector: "app-input",
    templateUrl: "./input.component.html",
    imports: [CommonModule, MatIconModule],
    styles: [
        ` .focused {
            @apply outline outline-blue-500 outline-1;
        }`
    ],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => InputComponent),
            multi: true
        }
    ]
})
export default class InputComponent implements ControlValueAccessor {

    @Input() title: string = '';
    @Input() placeholder: string = '';
    @Input() formName: string = '';
    @Input() imgUrl: string = '';
    inputTypes = InputTypes;
    isPasswordHidden = false;

    @ViewChild('inputContainer') inputContainer!: ElementRef<HTMLDivElement>;

    value: string = '';

    onChange: (value: string) => void = () => {};
    onTouched: () => void = () => {};

    writeValue(value: string | null): void {
        this.value = value || '';
    }

    registerOnChange(fn: (value: string) => void): void {
        this.onChange = fn;
    }

    registerOnTouched(fn: () => void): void {
        this.onTouched = fn;
    }

    setDisabledState?(isDisabled: boolean): void {
        // Agar input disable qilish kerak bo'lsa, bu yerda bajariladi
    }

    onFocus() {
        this.inputContainer.nativeElement.classList.add('focused');
        this.onTouched();
    }

    onBlur() {
        this.inputContainer.nativeElement.classList.remove('focused');
    }

    onPasswordToggle() {
        this.isPasswordHidden = !this.isPasswordHidden;
    }

    handleInput(event: Event) {
        const inputElement = event.target as HTMLInputElement;
        this.value = inputElement.value;
        this.onChange(this.value);
    }
}
