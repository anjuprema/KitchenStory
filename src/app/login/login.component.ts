import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }
  submitted : boolean = false;
  public user= {
    username: "",
    password: ""
  }
  ngOnInit(): void {
  }

  validateForm(form: any){
    Object.keys(form.controls).forEach(field => {
      const control = form.controls[field];
      control.markAsTouched({onlySelf: true});
    });
  }

  submitLogin(form: any){
    if(form.valid){
      this.submitted = true;
    }else{
      this.validateForm(form);
    }    
  }

  hasError(field: any){
    return(field.errors && field.touched && field.invalid);
  }
  
  
}
