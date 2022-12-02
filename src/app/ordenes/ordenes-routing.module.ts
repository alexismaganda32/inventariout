import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListadoComponent } from './pages/listado/listado.component';



const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'listado', component: ListadoComponent },
      
      { path: '**', redirectTo: 'listado' }
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class OrdenesRoutingModule { }








  


