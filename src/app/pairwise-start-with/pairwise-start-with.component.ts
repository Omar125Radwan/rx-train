import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { startWith, pairwise } from 'rxjs/operators';

@Component({
  selector: 'app-pairwise-start-with',
  templateUrl: './pairwise-start-with.component.html',
  styleUrls: ['./pairwise-start-with.component.scss']
})
export class PairwiseStartWithComponent implements OnInit {

  constructor() { }

  nameSubject = new BehaviorSubject<string>('');
  ngOnInit(): void {
    this.nameSubject.pipe(startWith(''),pairwise())
    .subscribe(([previousState, currentState]: Array<string>) => {
      if(previousState == '') {
        console.log('first')
      } else {
        console.log(previousState, currentState)
      }
    })
  }
}
