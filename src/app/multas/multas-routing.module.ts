import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MultaDetallePageComponent } from './pages/multa-detalle-page/multa-detalle-page.component';
import { MultasPageComponent } from './pages/multas-page/multas-page.component';

const routes: Routes = [{ path: '', component: MultasPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MultasRoutingModule {}
