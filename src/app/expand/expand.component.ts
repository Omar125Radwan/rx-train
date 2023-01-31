import { Component, OnInit } from '@angular/core';
import { of, EMPTY, Subject } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { mapTo, expand, tap, mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-expand',
  templateUrl: './expand.component.html',
  styleUrls: ['./expand.component.scss']
})
export class ExpandComponent implements OnInit {
  fetchDataButton = new Subject();
  constructor() { }

  ngOnInit(): void {
    const fetchData = this.fetchDataButton
    .pipe(
      mapTo(1),
      expand((index: number) => index !== 3? of(index+1): EMPTY),
      tap((index: number) => {console.log('index is ', index)}),
      mergeMap((index: number) => ajax({
        url: `https://jsonplaceholder.typicode.com/todos/${index}`
      }))
    )
    fetchData.subscribe(console.log)
  }

}
