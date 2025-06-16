import { LoginComponent } from './login/login.component';import { LayoutComponent } from './layout/layout.component';import { ProductComponent } from './product/product.component';import { HomeComponent } from './home/home.component';import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [ {path: 'Login', component: LoginComponent},  {path: 'Layout', component: LayoutComponent},  {path: 'Product', component: ProductComponent},  {path: 'Home', component: HomeComponent}, ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
