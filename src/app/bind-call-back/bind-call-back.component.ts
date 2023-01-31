import { Component, OnInit } from '@angular/core';
import { bindCallback } from 'rxjs/internal/observable/bindCallback';

@Component({
  selector: 'app-bind-call-back',
  templateUrl: './bind-call-back.component.html',
  styleUrls: ['./bind-call-back.component.scss']
})
export class BindCallBackComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const someFunction = (x: string, y: string, callBack: any) => {
      callBack(x)
    }
    const boundSomeFunction = bindCallback(someFunction);
    boundSomeFunction('my Name', 'my Age').subscribe(data => console.log('data is ', data))
  }

}
