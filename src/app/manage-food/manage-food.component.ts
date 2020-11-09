import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manage-food',
  templateUrl: './manage-food.component.html',
  styleUrls: ['./manage-food.component.css']
})
export class ManageFoodComponent implements OnInit {
  private dishesDataPath = "/assets/data/fooditem.json";
  public availableDishes; 
  constructor(private httpClient : HttpClient) { }

  ngOnInit(): void {
    this.httpClient.get(this.dishesDataPath).subscribe(data => {
      this.availableDishes = data;
    }, err => {
      console.log(err);
    });
  }

}
