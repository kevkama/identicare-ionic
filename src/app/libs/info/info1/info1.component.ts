import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-info1',
  templateUrl: './info1.component.html',
  styleUrls: ['./info1.component.scss'],
})
export class Info1Component  implements OnInit {

  constructor(private _router:Router) { }

  ngOnInit() {}

  goNext() {
    this._router.navigate(['info/info2']);
  }

}
