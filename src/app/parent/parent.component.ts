import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {
  title = '';
  arr = [1,2,3,4,5,6,7,8,9,0]
  constructor() { }

  ngOnInit() {
    this.testing();
  }

  // a method to test
  testing(){
    let ret = [];
    for ( let i = 0, j = this.arr.length; i < j; i++ ) {
      if (i%2) { 
        ret.push(this.arr[i]);
      }
    }
    console.log(ret);
    return ret;
  }

}