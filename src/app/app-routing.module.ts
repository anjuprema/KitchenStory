import { ChangePasswordComponent } from './change-password/change-password.component';
import { SearchFoodComponent } from './search-food/search-food.component';
import { LoginComponent } from './login/login.component';
import { DishesComponent } from './dishes/dishes.component';
import { CartComponent } from './cart/cart.component';
import { ManageFoodComponent } from './manage-food/manage-food.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateDishComponent } from './create-dish/create-dish.component';

const routes: Routes = [{
  path:'manage', component:ManageFoodComponent  
},{
  path:'cart', component:CartComponent
},{
  path:'', component:DishesComponent
},{
  path:'login', component:LoginComponent
},{
  path:'search', component:SearchFoodComponent
},{
  path:'change', component:ChangePasswordComponent
},{
  path:"create", component:CreateDishComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
