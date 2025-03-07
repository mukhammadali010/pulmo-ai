import { signalStore, withMethods, withState } from "@ngrx/signals";
import { PateintResultsType } from "../shared/models/frontend/patient-results";




type PatientResultsStore = {
    results:PateintResultsType[];
}

const initialState: PatientResultsStore = {
    results: [
       {
        id:1,
        name:"Ali",
        title:"test",
        phone:'24534534',
        date:'010102233'
       },
       {
        id:1,
        name:"Ali",
        title:"test",
        phone:'24534534',
        date:'010102233'
       },
       {
        id:1,
        name:"Ali",
        title:"test",
        phone:'24534534',
        date:'010102233'
       },
       {
        id:1,
        name:"Ali",
        title:"test",
        phone:'24534534',
        date:'010102233'
       },
       {
        id:1,
        name:"Ali",
        title:"test",
        phone:'24534534',
        date:'010102233'
       },
       {
        id:1,
        name:"Ali",
        title:"test",
        phone:'24534534',
        date:'010102233'
       },
       
    ]
}

export const PatientResultsStore = signalStore(
    { providedIn: 'root' },
    withState(initialState),
    withMethods((store)=>({
      
        
    }))
)
