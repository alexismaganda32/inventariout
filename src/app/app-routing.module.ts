import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';


import { MultaDetallePageComponent } from './multas/pages/multa-detalle-page/multa-detalle-page.component';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'layout',
    loadChildren: () =>
      import('./layout/layout.module').then((m) => m.LayoutModule),
    // canActivate: [AuthGuard],
  },
  {
    path: 'detalle/multa/:id',
    component: MultaDetallePageComponent,
  },
  { path: '**', redirectTo: 'auth' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
