import { Component, OnInit } from '@angular/core';
import { fromEvent, of } from 'rxjs';
import { skipWhile } from 'rxjs/operators';

@Component({
  selector: 'app-skip',
  templateUrl: './skip.component.html',
  styleUrls: ['./skip.component.scss']
})
export class SkipComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const click$ = fromEvent(document, 'click');
    of('x', 'y', 'z').pipe(skipWhile(i => i < 'z')).subscribe(console.log)
  }

}
