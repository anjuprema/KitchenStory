import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {
  changePassword = {
    currPswd: "",
    newPswd: ""
  }
  submitted = false;
  constructor() { }

  ngOnInit(): void {
  }


  validateForm(form: any){
    Object.keys(form.controls).forEach(field => {
      const control = form.controls[field];
      control.markAsTouched({onlySelf: true});
    });
  }

  submitChangePasswordLogin(form: any){
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
