import { Component, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';
import { take, single } from 'rxjs/operators';

@Component({
  selector: 'app-single',
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.scss']
})
export class SingleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // range(1, 5)
    // .pipe(single(i => i === 3 ))
    fromEvent(document, 'click')
    .pipe(take(1), single())
    .subscribe(
      () => {console.log('success')},
      () => {console.log('failed')},
    )
  }

}
