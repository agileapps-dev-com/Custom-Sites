import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductPageComponent } from './home/product-page/product-page.component';
import { PricingComponent } from './pricing/pricing/pricing.component';

const routes: Routes = [
  { path: 'home', component: ProductPageComponent },
  { path: 'pricing', component: PricingComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { useHash: true })
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
