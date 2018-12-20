import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerComponent } from './customer/customer.component';
import { OrdersComponent } from './orders/orders.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'customer'},
  {path: 'customer', component: CustomerComponent},
  {path: 'order', component: OrdersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
