import { Component, OnInit } from '@angular/core';
import { of, GroupedObservable } from 'rxjs';
import { groupBy, mergeMap, reduce, map, tap } from 'rxjs/operators';
interface Course {
  id: number;
  name: string;
}

interface GroupCourses {
  key: number;
  value: Array<Course>;
}

@Component({
  selector: 'app-group-by',
  templateUrl: './group-by.component.html',
  styleUrls: ['./group-by.component.scss']
})
export class GroupByComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const courses$ = of<Course>(
      { id: 1, name: 'javaScript' },
      { id: 2, name: 'Parcel' },
      { id: 2, name: 'webPack' },
      { id: 1, name: 'TypeScript' },
      { id: 4, name: 'Ngrx' },
      { id: 4, name: 'RxJs' },
      { id: 3, name: 'TSLint' },
    );
    courses$.pipe(
      groupBy((course: Course) => course.id),
      mergeMap((GroupCourses$: GroupedObservable<number, Course>) => GroupCourses$.pipe(
        reduce((acc: Array<Course>, curr: Course) => [...acc, curr], []),
        map((arr: Array<Course>) => {
          return {
            key: arr[0].id,
            value: [...arr]
          }
        }),
        tap((data: GroupCourses) => {console.log(data)})
      ))
    ).subscribe();
  }

}
