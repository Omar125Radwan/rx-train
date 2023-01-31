import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { elementAt, filter, ignoreElements} from 'rxjs/operators';
@Component({
  selector: 'app-element-at-filter-ignore-elements',
  templateUrl: './element-at-filter-ignore-elements.component.html',
  styleUrls: ['./element-at-filter-ignore-elements.component.scss']
})
export class ElementAtFilterIgnoreElementsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    //!elementAt
    /*of(1, 2, 3, 4, 10, 12)
    .pipe(elementAt(2))
    .subscribe(console.log);
    fromEvent(document, 'click')
    .pipe(elementAt(2))
    .subscribe(console.log)*/
    //!filter
    /*of(1, 2, 3, 4, 5)
    .pipe(filter(value => value % 2 === 0))
    .subscribe(console.log)
    */
    //!ignoreElements
    /*of(1, 2, 3, 4, 5)
    .pipe(ignoreElements())
    .subscribe(
      () => {console.log},
      () => {console.log('error')},
      () => {console.log('compelete')},
    );*/
  }

}
