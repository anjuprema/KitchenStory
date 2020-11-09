import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private httpClient: HttpClient) { }
  private cartDataPath = "/assets/data/cart.json"
  imagePath = "/assets/images/";
  public cartData;
  ngOnInit(): void {
    this.httpClient.get(this.cartDataPath).subscribe(data =>{
      this.cartData = data;
    })
  }

}
