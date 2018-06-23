import { Component, OnInit } from '@angular/core';
import { LoginModel } from '../models/login.model';
import { FormBuilder, FormGroup, Validator, Validators } from '@angular/forms';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: LoginModel = new LoginModel();
  loginForm: FormGroup;
  
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      
      
      'email':[this.user.email,[
        Validators.required,
        Validators.email
      ]],
      'password':[this.user.password,
      [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(30)
      ]]

    });

  }

    onLoginSubmit(){
      //alert(this.user.email+' '+this.user.password);
      if(this.user.email=="shravan@gmail.com" && this.user.password=="Mypassword")
      {
       // alert(" Successfully logged in");
       window.location.href = '/conc-card';
      }
      else
      {
        alert("invalid login");
      }
    }

}
