import { CommonModule } from "@angular/common";
import { AfterViewInit, Component, ElementRef, input, Input, signal, viewChild, ViewChild } from "@angular/core";
import { MatIconModule } from "@angular/material/icon";
import {  InputTypes } from "../../models/frontend/input-types";




@Component({
    selector: "app-input",
    templateUrl: "./input.component.html",
    imports:[ CommonModule ,  MatIconModule],
    styles: [
        ` .focused{
            @apply outline outline-blue-500 outline-1;
        }
        `
    ]

})

export default class InputComponent{

    title = input<string>('');
    placeholder = input<string>('');
    imgUrl = input<string>('');
    inputTypes = InputTypes
    inputContainer = viewChild<ElementRef<HTMLDivElement>>('inputContainer');
    isPasswordHidden = signal(false);


    onFocus() {
        
        this.inputContainer()?.nativeElement.classList.add('focused')
    }
    onBlur (){
        this.inputContainer()?.nativeElement.classList.remove('focused')
    }

    onPasswordToggle(){
        this.isPasswordHidden.update(value=>!value);
    }
}