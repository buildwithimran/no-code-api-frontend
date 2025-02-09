import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { SidebarLayoutComponent } from './sidebar-layout/sidebar-layout.component';
import { FullPageLayoutComponent } from './full-page-layout/full-page-layout.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { NavbarLayoutComponent } from './navbar-layout/navbar-layout.component';


@NgModule({
  declarations: [
    SidebarLayoutComponent,
    FullPageLayoutComponent,
    MainLayoutComponent,
    NavbarLayoutComponent
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule
  ]
})
export class LayoutModule { }
