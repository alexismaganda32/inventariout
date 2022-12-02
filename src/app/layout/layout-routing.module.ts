import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LayoutPageComponent } from './pages/layout-page/layout-page.component';

const routes: Routes = [ 
  {
    path: '',
    component: LayoutPageComponent,
    children: [
      { path: 'herramientas', loadChildren: () => import('../herramientas/herramientas.module').then(m => m.HerramientasModule) },
      { path: 'edificios', loadChildren: () => import('../edificios/edificios.module').then((m) => m.EdificiosModule) },
      { path: 'multas', loadChildren: () => import('../multas/multas.module').then((m) => m.MultasModule) },
      { path: 'ordenes', loadChildren: () => import('../ordenes/ordenes.module').then((m) => m.OrdenesModule) },
      { path: 'perfil', loadChildren: () => import('../perfil/perfil.module').then((m) => m.PerfilModule) },
      { path: '**', redirectTo: 'edificios' }
      ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutRoutingModule { }
