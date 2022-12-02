import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { RecuperarPasswordComponent } from './pages/recuperar-password/recuperar-password.component';
import { DashboardComponent } from '../auth/pages/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
      { path: 'recuperar', component: RecuperarPasswordComponent },
      { path: 'dash', component: DashboardComponent },
      { path: '**', redirectTo: 'login' }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class AuthRoutingModule { }
