import { RouterModule, Routes } from '@angular/router';
import { inject, NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'products', loadComponent: () => import('./products/products.component').then((c) => c.ProductsComponent) },
      { path: 'users', loadComponent: () => import('./users/users.component').then((c) => c.UsersComponent) }
    ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
