import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ParametrAnswers } from '../models/frontend/parametr-result-types';


@Injectable({
  providedIn: 'root'
})
export class ParametrResultService {
  private data = new BehaviorSubject<ParametrAnswers>({});
  
  currentData = this.data.asObservable();

  constructor() { 
   this.currentData.subscribe((value)=>{
    console.log(value , 'value');
    
   })
    
  }

  updateData(newData:ParametrAnswers){
    this.data.next(newData)
  }
}
