import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-food',
  templateUrl: './search-food.component.html',
  styleUrls: ['./search-food.component.css']
})
export class SearchFoodComponent implements OnInit {
  private imagePath = "/assets/images/";
  public searchDataPath = "/assets/data/search.json";
  public searchResult;
  constructor(private httpClient: HttpClient) { 
    httpClient.get(this.searchDataPath).subscribe(data => {
      this.searchResult = data;
    }, err => {
      console.log(err);
    });
  }

  ngOnInit(): void {
  }

}
