import { Routes } from '@angular/router';
import { LoginComponent } from '../pages/login/login.component';
import { ForgotPasswordComponent } from '../pages/forgot-password/forgot-password.component';
import { RegisterComponent } from '../pages/register/register.component';
import { HomeComponent } from '../pages/home/home.component';
import { DashboardComponent } from '../pages/dashboard/dashboard.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'dashboard', component: DashboardComponent},
  { path: '**', redirectTo: '' },
];
