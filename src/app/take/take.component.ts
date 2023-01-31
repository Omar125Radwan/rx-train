import { Component, OnInit } from '@angular/core';
import { fromEvent, interval } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-take',
  templateUrl: './take.component.html',
  styleUrls: ['./take.component.scss']
})
export class TakeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    let counter = 0;
    const click = fromEvent(document, 'click');
    interval(1000)
    .pipe(
      takeUntil(click),
    )
    .subscribe(console.log);
  }

}
