import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, combineLatest, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-combine-latest',
  templateUrl: './combine-latest.component.html',
  styleUrls: ['./combine-latest.component.scss']
})
export class CombineLatestComponent implements OnInit {
  // userMovies: Observable<Array<object>> | undefined;
  constructor() { }

  ngOnInit(): void {
    /*const obs1$ = new Observable(observer => {
      observer.complete();
    });
    obs1$.subscribe(x => console.log('obs 1 ', x));
    const obs2$ = interval(3000).pipe(take(5));
    obs2$.subscribe(x => console.log('obs 2 ', x));
    const combined = combineLatest(obs1$, obs2$);
    combined.subscribe(
      console.log,
      () => {},
      () => {
        console.log('compelete');
      })*/
    const movies = [
      { id: 1, name: 'movie 1' },
      { id: 2, name: 'movie 2' },
      { id: 3, name: 'movie 3' },
      { id: 4, name: 'movie 4' },
    ]
    const user = { name: 'user', favoriteMovieIds: [2] };
    const movies$ = new BehaviorSubject(movies);
    const user$ = new BehaviorSubject(user);
    combineLatest([movies$, user$])
      .pipe(
        map(([movies, user]) => {
          return movies.filter(movie => user.favoriteMovieIds.includes(
            movie.id,
          ))
        })
      ).subscribe(console.log);
    setTimeout(() => {
      user.favoriteMovieIds.push(1);
      user$.next(user);
      setTimeout(() => {
        user.favoriteMovieIds.push(3)
        user$.next(user);
      }, 2000);
    }, 3000);

    /*
    const movies = [
      {id: 1, name: 'movie 1'},
      {id: 2, name: 'movie 2'},
      {id: 3, name: 'movie 3'},
      {id: 4, name: 'movie 4'},
    ]
    const user = {name: 'user', favoriteMovieIds: [2]};
    const movies$ = new BehaviorSubject(movies);
    const user$ = new BehaviorSubject(user);
    const combine = combineLatest([movies$, user$])
    .pipe(
      map(([movies, user]) => {
        return movies.filter(movie => user.favoriteMovieIds.includes(
          movie.id,
        ))
      }),
    )
    setTimeout(() => {
      user.favoriteMovieIds.push(1);
      user$.next(user);
      setTimeout(() => {
        user.favoriteMovieIds.push(3)
        user$.next(user);
      }, 1000);
    }, 1000);
    this.userMovies = combine;
     */
  }

}
