import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-info4',
  templateUrl: './info4.component.html',
  styleUrls: ['./info4.component.scss'],
})
export class Info4Component  implements OnInit {

  constructor(private _router:Router) { }

  ngOnInit() {}

  goNext() {
    this._router.navigate(['auth']);
  }

}
