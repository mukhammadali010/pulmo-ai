import { Routes } from '@angular/router';

export const routes: Routes = [
    {path:'patients-info' , loadComponent:()=>import('./shared/components/patients/patients.component')},
    {path:'home' , loadComponent:()=>import('./pages/components/home/home.component')},
   
    {path:'login' , loadComponent:()=>import('./pages/components/login/login.component')},
    {path:'patient-results' , loadComponent:()=>import('./shared/components/patient-results/patient-results.component')},
    {path:'signup' , loadComponent:()=>import('./pages/components/signup/signup.component')},
    {path:'profile' , loadComponent:()=>import('./pages/components/profile/profile.component')},
    {path:'not-found' , loadComponent:()=>import('./shared/components/not-found/not-found.component')},
    {path:'' , redirectTo:'patients-info' , pathMatch:'full'},
    {path:'**' , redirectTo:'not-found'},
];
