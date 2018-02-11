import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../services/firebase-service.service';
import { PlofileInfo } from '../../models/plofile-info';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private firebaseService: FirebaseService,
              private router: Router) { };

  ngOnInit() {
  }

  loginFacebook() {
    this.firebaseService.loginWithFacebook().then((data :PlofileInfo)=>{
      this.router.navigate(['/home']);
      // console.log('success' + data);
      // console.log('success');
      // console.log(data.user.displayName);
      // console.log(data.user.email);
    }, (responseFail :any) => {
      this.router.navigate(['/']);
      // console.log('fail');
      // console.log(responseFail);
    });
  }

}
