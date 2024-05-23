import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-info2',
  templateUrl: './info2.component.html',
  styleUrls: ['./info2.component.scss'],
})
export class Info2Component  implements OnInit {

  constructor(private _router:Router) { }

  ngOnInit() {}

  goNext() {    
    this._router.navigate(['info/info3']);   
  }

}
