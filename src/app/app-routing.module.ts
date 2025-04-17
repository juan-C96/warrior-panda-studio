import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent, 
  },
  {
    path: 'quienes-somos',
    loadComponent: () =>
      import('./components/layout/layout.component').then(m => m.LayoutComponent),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
    LayoutComponent,
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
