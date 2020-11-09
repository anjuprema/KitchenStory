import { foodList } from './../model/foodItem';

import { Component, OnInit } from '@angular/core';
import { Food } from './../model/food'
@Component({
  selector: 'app-fooditem',
  templateUrl: './fooditem.component.html',
  styleUrls: ['./fooditem.component.css']
})
export class FooditemComponent implements OnInit {
  
  constructor() { }
  imagePath: string = "../../assets/images/";
  foodList: Food[];  
  ngOnInit(): void {
    this.foodList = foodList;
  }

}
