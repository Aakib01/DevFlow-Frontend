import { Routes } from '@angular/router';
import { LoginComponent } from '../pages/logincomponent/logincomponent';
import { DashboardComponent } from '../pages/dashboardcomponent/dashboardcomponent';
import { TicketsComponent } from '../pages/ticketscomponent/ticketscomponent';
import { authGuard } from '../guards/auth-guard';


export const routes: Routes = [
  { path: '', component: LoginComponent },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [authGuard]   
  },
  { path: 'tickets/:projectId', 
    component: TicketsComponent, 
    canActivate: [authGuard] 
  }
];