import { Component, OnInit } from '@angular/core';
import {toArray, defaultIfEmpty, take,
  isEmpty, every, find, findIndex} from 'rxjs/operators'
import {from, EMPTY, fromEvent} from 'rxjs'
@Component({
  selector: 'app-to-array',
  templateUrl: './to-array.component.html',
  styleUrls: ['./to-array.component.scss']
})
export class ToArrayComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  //! toArray
    // fromEvent(document, 'click')
    // .pipe(take(5),toArray())
    // .subscribe(console.log)

    //! defaultIfEmpty
    // EMPTY.pipe(defaultIfEmpty(`no stream`))
    // .subscribe(console.log)

    //! isEmpty
    // EMPTY.pipe(isEmpty())
    // .subscribe(console.log)

    //! every
    // const data = [
    //   {name: 'x', age: 23},
    //   {name: 'y'},
    //   {name: 'z', age: 25},
    // ]
    // from(data).pipe(
    //   every(x => x.hasOwnProperty('age'))
    // )
    // .subscribe(console.log);

    //! find
    // const data = [
    //   {name: 'x', age: 23},
    //   {name: 'x', age: 24},
    //   {name: 'x', age: 26},
    //   {name: 'y', age: 24},
    //   {name: 'z', age: 25},
    // ]
    // from(data)
    // .pipe(findIndex(a => a.age === 24))
    // .subscribe(console.log);
  }

}
