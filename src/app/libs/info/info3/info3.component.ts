import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-info3',
  templateUrl: './info3.component.html',
  styleUrls: ['./info3.component.scss'],
})
export class Info3Component  implements OnInit {

  constructor(private _router:Router) { }

  ngOnInit() {}

  goNext() {
    this._router.navigate(['info/info4']);
  }

}
