import { Component } from "@angular/core";
import { ParametrSavollar } from "../../models/frontend/parametr-savollar";
import { NgFor } from "@angular/common";
import { MatButtonModule } from "@angular/material/button";
import { MatListModule } from "@angular/material/list";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatRadioModule } from "@angular/material/radio";

@Component({
    selector:"app-parametrlar",
    templateUrl:'./parametrlar.component.html',
    imports:[NgFor, MatButtonModule , MatRadioModule],
    styleUrl:'./parametrlar.component.scss',

})

export class Parametrlar {
     savol:ParametrSavollar[] = [
        {
            id: 1,
            savol: 'Беморлар ўртача ёши:',
            variant1: "56-60",
            variant2: "60-70",
        },
        {
            id: 2,
            savol: 'Шароит (ишлаш ва яшаш шароитида зарарли омиллар мавжудлиги (зах ва б.):',
            variant1: "Ха",
            variant2: "Йўқ",
        },
        {
            id: 3,
            savol: 'Чекиш (бемор чекади, олдин чаккан):',
            variant1: "Ха",
            variant2: "Йўқ",
        },
        {
            id: 4,
            savol: 'Аллергик восита билан контакт (Бемор аллергик воситалар билан доимий алоқада бўлади: кимёвий моддалар):',
            variant1: "Ха",
            variant2: "Йўқ",
        },
        {
            id: 5,
            savol: 'Совук (совуқ шароитда бемор регуляр бўлиши, иш ёки уйда):',
            variant1: "Ха",
            variant2: "Йўқ",
        },
        {
            id: 6,
            savol: 'Ирсият (наслда касаллик учраши, яқин қариндошларида ушбу касаллик кузатилганлиги):',
            variant1: "Кузатилган",
            variant2: "Кузатилмаган",
        },
        {
            id: 7,
            savol: 'Касаллик бошланиши:',
            variant1: "Секин аста – йиллар давомида",
            variant2: "Тезда",
        },
        {
            id: 8,
            savol: 'Касаллик кечиши:',
            variant1: "Ўрта авж олиши",
            variant2: "Тез авж олиши",
        },
        {
            id: 9,
            savol: 'Даволаш самара бердими?',
            variant1: "Ха",
            variant2: "Йўқ",
        },
        {
            id: 10,
            savol: 'Хуружлар билан кечиши:',
            variant1: "Ха",
            variant2: "Йўқ",
        },
        {
            id: 11,
            savol: 'Йўтал кузатилиши:',
            variant1: "Кузатилади доимий эрталаб",
            variant2: "Кузатилади кун давомида",
            variant3: "Кузатилмайди",
        },
        {
            id: 12,
            savol: 'Балғам ранги бор/йўқлиги:',
            variant1: "Шиллиқ йирингли",
            variant2: "Балғам кузатилмайди",
            variant3: "Шиллиқ йирингли ёки кузатилмайди",
        },
        {
            id: 13,
            savol: 'Хансираш:',
            variant1: "Ифодаланган",
            variant2: "Доимий",
        },
        {
            id: 14,
            savol: 'Оғриқлар (кўкрак кафасидаги оғриқлар мавжудлиги):',
            variant1: "Мавжуд",
            variant2: "Мавжуд эмас",
        },
        {
            id: 15,
            savol: 'Иситма:',
            variant1: "Йўқ",
            variant2: "37-38",
            variant3: "39-40",
        },
    ];
    
}