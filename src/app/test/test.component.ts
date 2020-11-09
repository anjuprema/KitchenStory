import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor(public httpClient: HttpClient) { }

  ngOnInit(): void {
    this.httpClient.get("https://reqres.in/api/users?page=1").subscribe(data=>{
      console.log(data);
    });
  }

}
