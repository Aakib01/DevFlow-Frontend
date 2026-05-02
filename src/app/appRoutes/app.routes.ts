import { Routes } from '@angular/router';
import { LoginComponent } from '../pages/logincomponent/logincomponent';
import { DashboardComponent } from '../pages/dashboardcomponent/dashboardcomponent';


export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent }
];