import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) // Lazy load Auth Module
  },
  {
    path: '',
    canActivate: [AuthGuard],
    loadChildren: () => import('./layout/layout.module').then(m => m.LayoutModule) // Lazy load Layouts
  },
  {
    path: '**',
    redirectTo: '' // Redirect to default layout
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
