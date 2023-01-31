import { Component, OnInit } from '@angular/core';
import { asyncScheduler, fromEvent, interval } from 'rxjs';
import { pluck, map, throttleTime, auditTime, debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-throttle-time-audit-time-debounce-time-dom',
  templateUrl: './throttle-time-audit-time-debounce-time-dom.component.html',
  styleUrls: ['./throttle-time-audit-time-debounce-time-dom.component.scss']
})
export class ThrottleTimeAuditTimeDebounceTimeDomComponent implements OnInit {

  ngOnInit(): void {
    // interval(1000).subscribe(x => console.log(x));
    const cities = ['rome', 'madrid', 'paris', 'brussels', 'eindhoven', 'berlin', 'copenhang', 'stockholm'];
    const filterCities = (value: any) => cities.filter(city => city.indexOf(value) !== -1);

    const input = document.querySelector('input');
    const suggestions: any = document.querySelector('#suggestions');

    if (input) {
      const config = {
        leading: true,
        trailing: true,
      }
      fromEvent(input, 'keyup').pipe(
        pluck('target', 'value'),
        throttleTime(2000, asyncScheduler, config),
        debounceTime(2000),
        map(value => {
          console.log('Value is',value);
          return filterCities(value)
        }),
        map(filterCities => filterCities.map(city => `<li>${city}</li>`).join(''))
      ).subscribe((html: any) => {
        suggestions.innerHTML = html;
      })
    }
  }

}
