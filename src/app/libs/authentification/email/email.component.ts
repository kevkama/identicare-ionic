import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.scss'],
})
export class EmailComponent  implements OnInit {

  constructor(private _router:Router) { }

  ngOnInit() {}
  
  goBack() {
    this._router.navigate(['auth']);
  }

}
