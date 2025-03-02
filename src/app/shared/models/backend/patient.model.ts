export interface Patient{
    id?:number;
    full_name:string;
    birthdate:string;
    gender:"male" | "female";
    phone:string;
}