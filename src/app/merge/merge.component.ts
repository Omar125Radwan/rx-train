import { Component, OnInit } from '@angular/core';
import { interval, merge } from 'rxjs';
import { take, mapTo } from 'rxjs/operators';

@Component({
  selector: 'app-merge',
  templateUrl: './merge.component.html',
  styleUrls: ['./merge.component.scss']
})
export class MergeComponent implements OnInit {
  posts: string[] = [];

  constructor() { }

  ngOnInit(): void {
    const catsUrl = 'https://loremflickr.com/100/100/cat';
    const dogsUrl = 'https://loremflickr.com/100/100/dog';
    const elephantUrl = 'https://loremflickr.com/100/100/elephant';

    const cats$ = interval(2000).pipe(take(5), mapTo(catsUrl))
    const dogs$ = interval(3000).pipe(take(5), mapTo(dogsUrl))
    const elephants$ = interval(4000).pipe(take(5), mapTo(elephantUrl))

    const merge$ = merge(cats$, dogs$, elephants$, 2);
    merge$.subscribe(url => this.posts.push(url));
  }

}
