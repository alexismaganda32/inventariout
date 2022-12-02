import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EdificioPageComponent } from './pages/edificio-page/edificio-page.component';

const routes: Routes = [
  {path: '', component: EdificioPageComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EdificiosRoutingModule {}
