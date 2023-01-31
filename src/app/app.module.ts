import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ThrottleTimeAuditTimeDebounceTimeDomComponent } from './throttle-time-audit-time-debounce-time-dom/throttle-time-audit-time-debounce-time-dom.component';
import { OfFromComponent } from './of-from/of-from.component';
import { MapTapComponent } from './map-tap/map-tap.component';
import { HttpClientModule } from '@angular/common/http';
import { ShareComponent } from './share/share.component';
import { TakeComponent } from './take/take.component';
import { MergeMapComponent } from './merge-map/merge-map.component';
import { ConcatComponent } from './concat/concat.component';
import { ForkJoinComponent } from './fork-join/fork-join.component';
import { AjaxComponent } from './ajax/ajax.component';
import { BindCallBackComponent } from './bind-call-back/bind-call-back.component';
import { CombineLatestComponent } from './combine-latest/combine-latest.component';
import { DeferComponent } from './defer/defer.component';
import { FormEventPluckEmptyComponent } from './form-event-pluck-empty/form-event-pluck-empty.component';
import { TimerRangeComponent } from './timer-range/timer-range.component';
import { MergeComponent } from './merge/merge.component';
import { BufferComponent } from './buffer/buffer.component';
import { ExhaustExhaustMapComponent } from './exhaust-exhaust-map/exhaust-exhaust-map.component';
import { ExpandComponent } from './expand/expand.component';
import { GroupByComponent } from './group-by/group-by.component';
import { ReduceScanMergescanComponent } from './reduce-scan-mergescan/reduce-scan-mergescan.component';
import { PairwiseStartWithComponent } from './pairwise-start-with/pairwise-start-with.component';
import { PartitionComponent } from './partition/partition.component';
import { WindowComponent } from './window/window.component';
import { SkipComponent } from './skip/skip.component';
import { CountComponent } from './count/count.component';
import { AuditThrottleDebounceComponent } from './audit-throttle-debounce/audit-throttle-debounce.component';
import { DistinctComponent } from './distinct/distinct.component';
import { ElementAtFilterIgnoreElementsComponent } from './element-at-filter-ignore-elements/element-at-filter-ignore-elements.component';
import { SampleSampleTimeComponent } from './sample-sample-time/sample-sample-time.component';
import { SingleComponent } from './single/single.component';
import { DelayComponent } from './delay/delay.component';
import { MaterializeDematerializeComponent } from './materialize-dematerialize/materialize-dematerialize.component';
import { TimeIntervalTimeoutTimeoutWithTimestampComponent } from './time-interval-timeout-timeout-with-timestamp/time-interval-timeout-timeout-with-timestamp.component';
import { ToArrayComponent } from './to-array/to-array.component';
import { CombineAllComponent } from './combine-all/combine-all.component';
import { WithLatestFromComponent } from './with-latest-from/with-latest-from.component';
import { HotWarmColdComponent } from './hot-warm-cold/hot-warm-cold.component';
@NgModule({
  declarations: [
    AppComponent,
    ThrottleTimeAuditTimeDebounceTimeDomComponent,
    OfFromComponent,
    MapTapComponent,
    ShareComponent,
    TakeComponent,
    MergeMapComponent,
    ConcatComponent,
    ForkJoinComponent,
    AjaxComponent,
    BindCallBackComponent,
    CombineLatestComponent,
    DeferComponent,
    FormEventPluckEmptyComponent,
    TimerRangeComponent,
    MergeComponent,
    BufferComponent,
    ExhaustExhaustMapComponent,
    ExpandComponent,
    GroupByComponent,
    ReduceScanMergescanComponent,
    PairwiseStartWithComponent,
    PartitionComponent,
    WindowComponent,
    SkipComponent,
    CountComponent,
    AuditThrottleDebounceComponent,
    DistinctComponent,
    ElementAtFilterIgnoreElementsComponent,
    SampleSampleTimeComponent,
    SingleComponent,
    DelayComponent,
    MaterializeDematerializeComponent,
    TimeIntervalTimeoutTimeoutWithTimestampComponent,
    ToArrayComponent,
    CombineAllComponent,
    WithLatestFromComponent,
    HotWarmColdComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
