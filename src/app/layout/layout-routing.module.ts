import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '../modules/dashboard/dashboard.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    // canActivate: [AuthGuard], // Protect dashboard with AuthGuard
    children: [
      { path: '', component: DashboardComponent }, // Default dashboard
      // {
      //   path: 'users',
      //   loadChildren: () => import('../modules/users/users.module').then(m => m.UsersModule)
      // },
      // {
      //   path: 'settings',
      //   loadChildren: () => import('../modules/settings/settings.module').then(m => m.SettingsModule)
      // }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
