import { Component, OnInit } from '@angular/core';
import { Subject, of } from 'rxjs';
import { distinctUntilKeyChanged } from 'rxjs/operators';

interface Person {
  id: number,
  name: string,
}

@Component({
  selector: 'app-distinct',
  templateUrl: './distinct.component.html',
  styleUrls: ['./distinct.component.scss']
})
export class DistinctComponent implements OnInit {

  constructor() { }

  nameSubject = new Subject<Person>();
  ngOnInit(): void {
    of(
      {id: 1, name: 'x'},
      {id: 2, name: 'x'},
      {id: 2, name: 'y'},
      {id: 3, name: 'y'},
      {id: 4, name: 'z'},
      {id: 5, name: 'z'},
    )
    .pipe(distinctUntilKeyChanged('name'))
    .subscribe(console.log);
  }

}
