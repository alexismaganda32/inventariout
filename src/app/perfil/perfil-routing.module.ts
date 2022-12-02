import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './pages/details/details.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'details', component: DetailsComponent },
      { path: '**', redirectTo: 'details' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PerfilRoutingModule { }
