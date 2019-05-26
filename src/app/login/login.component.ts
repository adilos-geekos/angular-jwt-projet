import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/services/auth.services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  mode:number = 0;
  constructor(private auth:AuthService) { }

  ngOnInit() {
  }

  onLogin(user){
    console.log("adil:",user);
    this.auth.login(user).subscribe(resp=>{
      if (resp.headers.get("authorization")){
        sessionStorage.setItem("token",resp.headers.get("authorization"))
      }
      else if (resp.headers.get("Authorization")){
        sessionStorage.setItem("token",resp.headers.get("authorization"))
      }
      
      console.log("---good-------",resp.headers.get("Authorization"));
      console.log("---good-------",resp.headers)
      },err=>{
        // this.mode = 1;
        console.log("----------",err);
      });
  }
}
