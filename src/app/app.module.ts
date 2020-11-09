import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooditemComponent } from './fooditem/fooditem.component';
import { DishesComponent } from './dishes/dishes.component';
import {HttpClientModule} from '@angular/common/http';
import { CartComponent } from './cart/cart.component';
import { ManageFoodComponent } from './manage-food/manage-food.component';
import { LoginComponent } from './login/login.component';
import { CreateDishComponent } from './create-dish/create-dish.component';
import { SearchFoodComponent } from './search-food/search-food.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { TestComponent } from './test/test.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    FooditemComponent,
    DishesComponent,
    CartComponent,
    ManageFoodComponent,
    LoginComponent,
    CreateDishComponent,
    SearchFoodComponent,
    ChangePasswordComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
