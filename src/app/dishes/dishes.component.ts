import { HttpClient} from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dishes',
  templateUrl: './dishes.component.html',
  styleUrls: ['./dishes.component.css']
})
export class DishesComponent implements OnInit {
  private dishesDataPath = "/assets/data/fooditem.json";
  private imagePath = "/assets/images/";
  public dishesList;
  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.httpClient.get(this.dishesDataPath).subscribe(data => {
      this.dishesList = data;
    }, err => {
      console.log(err);
    })
  }

}
