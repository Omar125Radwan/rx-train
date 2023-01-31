import { Component, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { withLatestFrom } from 'rxjs/operators';

@Component({
  selector: 'app-with-latest-from',
  templateUrl: './with-latest-from.component.html',
  styleUrls: ['./with-latest-from.component.scss']
})
export class WithLatestFromComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const clicks = fromEvent(document, 'click');
    const data$ = ajax('https://jsonplaceholder.typicode.com/todos/1');
    clicks.pipe(withLatestFrom(data$)).subscribe(console.log);
  }

}
