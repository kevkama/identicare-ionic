import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent  implements OnInit {

  constructor(private _router:Router) { }

  ngOnInit() {}

  goReg() {
    this._router.navigate(['auth/register']);
  }

  goEmail() {
    this._router.navigate(['auth/email']);
  }

}
