import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent  implements OnInit {

  constructor(private _router:Router) { }

  ngOnInit() {}
  
  goBack() {
    this._router.navigate(['auth']);
  }

}
