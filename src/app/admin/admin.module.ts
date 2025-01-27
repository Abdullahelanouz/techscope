import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [],
  imports: [CommonModule, AdminRoutingModule,DashboardComponent, HomeComponent],
})
export class AdminModule {}
