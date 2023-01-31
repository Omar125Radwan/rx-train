import { Component, OnInit } from '@angular/core';
import { from, Observable, partition } from 'rxjs';
import { ajax } from 'rxjs/ajax';

@Component({
  selector: 'app-partition',
  templateUrl: './partition.component.html',
  styleUrls: ['./partition.component.scss']
})
export class PartitionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const users$ = ajax.getJSON('https://jsonplaceholder.typicode.com/users');
    users$.subscribe((userData: any) => this.filterData(from(userData)));
  }
  filterData(userData$: Observable<any>) {
    const [filtered$, nonFiltered$] = partition(userData$, (user: any) =>
      user.id % 2 == 0)
      filtered$.subscribe(filteredData => console.log(filteredData));
      console.log('=============');
      nonFiltered$.subscribe(nonFilteredData => console.log(nonFilteredData));
  }

}
